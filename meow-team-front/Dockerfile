
# CMD ["npm", "start"]

#Stage 1
FROM node:17-alpine as builder
WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY . .
RUN npm install --force
RUN npm run build
#Stage 2
FROM nginx:stable-alpine
# 
# RUN rm -rf ./*
COPY --from=builder /app/dist /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000:80
ENTRYPOINT ["nginx", "-g", "daemon off;"]

