# Dockerfile cho frontend
FROM node:17-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build  # Xây dựng ứng dụng

# Sử dụng Nginx để phục vụ file tĩnh
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 3000

# Khởi động Nginx
CMD ["nginx", "-g", "daemon off;"]