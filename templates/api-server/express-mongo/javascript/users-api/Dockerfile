FROM node:16-alpine
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
#RUN ["chmod", "+x", "init.sh"]
CMD [ "npm", "run", "dev" ]

