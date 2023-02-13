FROM node:19-bullseye-slim

RUN npm install -g npm@9.4.2
RUN npm install -g typescript@beta

COPY samples /