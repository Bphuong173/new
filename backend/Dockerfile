FROM node:17-alpine

WORKDIR /app

COPY package*.json ./
# ENV DATABASE_URL="postgresql://postgres:Ksv1404@@postgres:5432/apptodo"

COPY prisma ./prisma
RUN npm install npm@latest
RUN npm install -g prisma
RUN prisma generate
RUN prisma migrate dev 

COPY . .

EXPOSE 5500

CMD ["npm", "start"]