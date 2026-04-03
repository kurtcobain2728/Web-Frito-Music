# build stage
FROM node:20-alpine as build-stage

WORKDIR /app

# Instala dependencias separadamente para aprovechar el cache de Docker
COPY package*.json ./
RUN npm install

# Copia el resto de los archivos y genera el build
COPY . .
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage

# Copia los archivos del build a Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copia una configuración básica de nginx para manejar SPA (opcional pero recomendado)
# RUN printf 'server {\n\tlisten 80;\n\tlocation / {\n\t\troot /usr/share/nginx/html;\n\t\tindex index.html index.htm;\n\t\ttry_files $uri $uri/ /index.html;\n\t}\n}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
