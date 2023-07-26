NPM := npm

PRETTIER_TARGETS = "**/*.(css|js|json|less)"

all: setup-frontend setup-backend

setup-frontend:
	cd frontend && $(NPM) install &

setup-backend:
	cd backend && $(NPM) install

run: run-frontend run-backend

run-frontend:
	cd frontend && $(NPM) start &
	
run-backend:
	cd backend && $(NPM) start

format-js: 
	cd backend && $(NPM) run format && $(NPM) run lint 
	cd frontend && $(NPM) run format && $(NPM) run lint

