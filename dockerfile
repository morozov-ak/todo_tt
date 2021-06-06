FROM node:16-alpine3.11 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
EXPOSE 3000
CMD ["npm","start"]