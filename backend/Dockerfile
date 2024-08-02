FROM node:17-alpine

WORKDIR /backend

# ENV DATABASE_URL="postgresql://postgres:Ksv1404@@localhost:5432/apptodo"
COPY package*.json ./
COPY prisma ./prisma
RUN npm install
RUN npm install -g prisma
RUN prisma generate

COPY . .

EXPOSE 8080

CMD ["npm", "start"]