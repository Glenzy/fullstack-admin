# syntax=docker/dockerfile:1

# inherits from node's own base image that includes all the tools and packages required 
FROM node:16.3-alpine3.11 as base
# TODO This Docker file allows app to run locally but we want to set the NODE_ENV correctly
#ENV NODE_ENV=production
# This instructs Docker to use this path as the default location for all subsequent commands. 
WORKDIR /app/client/
COPY . ./

RUN npm install
RUN addgroup -S user
# Create a user 'appuser' under 'xyzgroup'
RUN adduser -S -D -h /app/client/ appuser user

# Chown all the files to the app user.
RUN chown -R appuser:user /app/client/
# Switch to 'appuser'
USER appuser

# Open the mapped port
EXPOSE 3005
# Telll docker what command we need to run 
CMD [ "npm", "run", "dev" ]