FROM node:17-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g prisma

COPY ./prisma prisma

RUN npm ci

COPY . .

EXPOSE 8080

CMD ["npm", "start"]