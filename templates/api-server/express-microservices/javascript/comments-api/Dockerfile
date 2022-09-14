FROM node:16-alpine
WORKDIR /app
COPY yarn.lock .
RUN yarn install
COPY . .
CMD [ "npm", "start" ]

