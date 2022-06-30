FROM node:16-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install --legacy-peer-deps

CMD [ "npm", "run", "dev" ]