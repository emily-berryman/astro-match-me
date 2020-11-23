# ASTRO MATCH ME 
### Find your boo! Compatibilty for robots

Notes from Hortense:

Everytime you clone down the Master you need to 

*npm i

*"npm run knex migrate:latest
*"npm run knex seed:run

ones your database has been populates, you can now use this shortcut:

*npm run db-reset (this does both run migrations and run seed)


If you want a fast way to commit use the command 

make commit my branch


Notes from Dev Academy:


# Fullstack boilerplate

## Getting Started

### From the Github UI
See the instructions [here](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) to use Github's feature to create a new repo from a template.

### From the command line

```
git clone https://github.com/dev-academy-challenges/boilerplate-fullstack [your-project-name]
cd [your-project-name]
npm install # to install dependencies
npm run dev # to start the dev server
```

You can find the server running on [http://localhost:3000](http://localhost:3000).

## Details

This repo includes:

* a single, simple API endpoint (`/api/v1/fruits`)
* a single React component (`<App />`)
* an example database module (`server/db/fruits.js`)
* an API client module (`client/apis/fruits.js`)
* configuration for Jest and Enzyme (including JSDOM)
* configuration for server-side debugging in VS Code
* a single client-side test (`client/components/App.test.js`)
