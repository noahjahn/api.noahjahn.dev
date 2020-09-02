# api.noahjahn.dev

api.noahjahn.dev was made to track how many unique visitors come to noahjahn.dev, how often they access the site, and where they are accessing it from.

### Table Of Contents

1. [Quick Links](#quick-links)
2. [Getting Started](#getting-started)
3. [Docker](#docker)
4. [Deployment](#deployment)


## Quick Links

* Localhost: [http://localhost/](http://localhost/)
* Production: [https://api.noahjahn.dev/](https://api.noahjahn.dev/)


## Getting Started

To run this code you'll need to 
* use a UNIX operation system
* have [Docker](https://www.docker.com/) installed


### Quick Start

Locally, using docker is the easiest and fastest way to get up and running. The `docker-compose.yml` file will start the following services for you:  
*  Nodejs Alpine container mapped to port 8000
*  MongoDB mapped to port 27017

The local database credentials are set in the `docker-compose.yml` file:  
*  Username: root
*  Password: Codingisfun

1. Clone the repository and change directory into the cloned repo

```
git clone git@github.com:noahjahn/api.noahjahn.dev.git
cd api.noahjahn.dev
```

2. Copy `.env.example` to `.env`, it includes local credentials for using the docker services

```
cp .env.example .env
```

3. Start docker containers

```
docker-compose up
```

4. Once complete, you can being developing in a live reloading environment provided by nodemon


## Docker

### Start the docker containers (bring them up)

```
docker-compose up
```

*You can use the -d flag runs the containers in a detached state so you can continue to use your terminal, but you won't see console.log output from the application*

### Stop containers from an attached state

```
Ctrl + C
```

Then, you still need to bring containers down

### Bring containers down

```
docker-compose down
```


## Deployment
