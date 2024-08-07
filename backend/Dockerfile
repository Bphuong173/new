FROM node:17-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install npm@latest
RUN npm install -g prisma

COPY . .

EXPOSE 5500

CMD ["npm", "start"]

