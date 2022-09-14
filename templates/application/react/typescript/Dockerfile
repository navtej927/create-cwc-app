FROM node:alpine
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm i ci
COPY . .
RUN npm run build