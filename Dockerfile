FROM node:lts-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV MONGO_URI=<your-mongo-uri>

EXPOSE 8080

CMD ["npm", "start"]