FROM node:23-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY .env /app/
COPY ./dist /app/dist

EXPOSE 4000
