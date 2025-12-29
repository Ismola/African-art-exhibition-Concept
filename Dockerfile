FROM nginx:alpine

# Copiar archivos del proyecto al directorio de Nginx
COPY . /usr/share/nginx/html/

# Copiar configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer puerto 80
EXPOSE 80

# Nginx se ejecuta automáticamente con la imagen base
CMD ["nginx", "-g", "daemon off;"]
