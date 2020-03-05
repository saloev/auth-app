start:
	npm run serve

prod: 
	npm run build

publish: 
	npm run build && git add dist && git commit -m "Initial dist subtree commit" && git subtree push --prefix dist origin gh-pages

publish-force:
	git push origin `git subtree split --prefix dist master`:gh-pages --force

lint: 
	npm run lint ./src

lint-fix: 
	npm run lint ./src/ --fix