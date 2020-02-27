start:
	npm run serve

prod: 
	npm run build

lint: 
	npm run lint ./src

lint-fix: 
	npm run lint ./src/ --fix