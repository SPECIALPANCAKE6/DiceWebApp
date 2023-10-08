FROM nginx:latest

COPY . /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

RUN apt-get update && apt-get install procps -y

# CMD nginx