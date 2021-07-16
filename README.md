# Run Docker + Node

```
docker build -t app . && docker run -it --init -p 8000:8000 app  

```

## Run Docker Compose
```
 docker-compose -f docker-compose.yml up --build
```

## Build Image
```
docker build -t app .
```

### TODO:

**Skeleton**
- [ ] Properly set up Docker and docker-compose. Does the image start?
- [ ] Properly set up dev container. Can I open it? Can I develop in it? Does nodemon work? Is docker compose available?
- [ ] Be able to develop in `development` and deploy in `production` modes - Have a skeleton set up to differentiate the 2
- [ ] Is it secure?
- [ ] Add Make commands
- [ ] Set up CI/CD: https://docs.docker.com/language/nodejs/configure-ci-cd/ as a starting point. 
- [ ] Set up end to end backend with db, Typescript, front end skeleton
- [ ] How to handle the db? Build a development db, production - How to deploy changes to the production db without updating data?
- [ ] Design databse structure  
- [ ] Add GraphQL - Can read from db? Can send and receive basic data?
- [ ] Basic frontend skeleton
- [ ] E2E testing - Cypress
- [ ] Demonstrate working end to end skeleton 

### End Game 
The aim is to develop variants of an admin backend. Db must be able to handle concurrency and user access. For example 2 or more users updating the same records. It must also handle user access. The frontend is of secondary importance. 
- GraphQL + MongoDB/Postgress
- Postgress MVC REST API
- CI/CD - Gitlab, CircleCI, Jenkins, TeamCity (???) - Probably Gitlab/CircleCi
- Hosting - Github pages, AWS, Heroku, Google Cloud  (???) - Whatever's free'er
### If A Frontend Is Built
- NextJS
- Contentful CMS
- Storybook Accessible UI library (no css libraries)
- UI library installable  

