# Dockerfile cho backend
FROM node:17-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install npm@latest

COPY . .

EXPOSE 5500
CMD ["npm", "start"]