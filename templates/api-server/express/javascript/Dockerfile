FROM node:18

# Create app directory
WORKDIR /usr/src/app
COPY package.json .
COPY yarn.lock .
RUN yarn
COPY . .
CMD [ "yarn", "dev" ]