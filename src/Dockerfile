FROM node:latest

WORKDIR /app

COPY package*.json .

RUN npm install --legacy pear

COPY , ,

EXPOSE 8080

CMD [ "npm", "run", "dev" ]