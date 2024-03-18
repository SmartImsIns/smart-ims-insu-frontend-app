FROM node:20.11.1 AS dist

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY ./ .

RUN npm run build:dev


FROM ubuntu/apache2

RUN mkdir -p  /var/www/html

WORKDIR /var/www/html/

COPY --from=dist /app/build/ ./

COPY htaccess/ /var/www/html/.htaccess

RUN a2enmod rewrite

COPY 000-default.conf /etc/apache2/sites-available/
EXPOSE 80