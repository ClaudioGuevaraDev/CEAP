FROM node:16-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install --legacy-peer-deps

EXPOSE 3000

CMD [ "npm", "run", "dev" ]