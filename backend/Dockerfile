# syntax=docker/dockerfile:1

# inherits from node's own base image that includes all the tools and packages required 
FROM node:16.3-alpine3.11 as base

# RUN apk --no-cache add git
# TODO set as environment var
ENV NODE_ENV=development
# This instructs Docker to use this path as the default location for all subsequent commands. 
WORKDIR /app

# Make node the owner
RUN mkdir -p /app && chown -R node:node /app

USER node
# before running NPM install we need to get the package.json and package-lock.json into the image
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci
COPY . .
# set up tests to run before build
FROM base as test
# USER node
CMD [ "npm", "run", "test" ]

#then we build it. 
FROM base as dev
# USER node
# Telll docker what command we need to run 
CMD [ "node", "server.js" ]
