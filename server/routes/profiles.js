const { getTokenDecoder } = require("authenticare/server/token");

const express = require("express");
const router = express.Router();

const db = require("../db/db");

router.get("/", (req, res) => {
  return db
    .getProfiles()
    .then((profiles) => {
      res.json(profiles);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Something went wrong" });
    });
});

router.post("/", getTokenDecoder(), (req, res) => {
  const profile = req.body;
  // { name: 'kelly, sign: 'pisces' }

  profile.user_id = req.user.id;
  // { name: 'kelly, sign: 'pisces', user_id: 17 }

  return db.addProfile(profile).then((ids) => {
    console.log(ids);
    res.json({});
  });
});

router.delete("/", (req, res) => {
  const id = req.body.id;
  return db.deleteProfile(id).then(() => {
    res.json({});
  });
});

module.exports = router;
