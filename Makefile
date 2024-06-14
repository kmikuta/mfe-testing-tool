clean:
	cd server && ./gradlew clean
	cd client && npm run clean

install:
	cd client && npm ci
	cd server 

build:
	cd server && ./gradlew build
	cd client && npm run build

test:
	cd server && ./gradlew test
	cd client && npm test