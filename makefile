add-commit:
	git add .
	git commit -m "$m"
	
add-com-mybranch:
	git add .
	git commit -m "$m"
	git push origin $m
	
pushbranch:
	git add .
	git commit -m "$m"
	git push origin -u HEAD
	