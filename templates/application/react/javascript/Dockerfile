FROM node:alpine
WORKDIR /app
COPY package-lock.json .
COPY package.json .
RUN npm i ci
COPY . .
RUN yarn build