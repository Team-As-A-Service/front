FROM nginx:1.17.1-alpine
COPY package*.json ./
EXPOSE 4200 
CMD ["nginx", "-g", "daemon off;"]
