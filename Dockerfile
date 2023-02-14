FROM node:19-bullseye-slim

RUN npm install -g npm@9.4.2

COPY samples /usr/src

WORKDIR /usr/src

RUN npm install
