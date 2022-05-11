## Description

You need docker on your pc.

## Installation

```bash
$ cd /Tsradar-server npm install
$ cd /Tsradar-web npm install
```

## Running the app Tsradar-server

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running the app Tsradar-web

```bash
# development
$ ng serve

# production mode
$ ng build
```

## mongoDb up

```bash
#up
$ cd /mongoDB
$ docker-compose up

#stop
$ docker-compose stop

#run
$ docker-compose run
```