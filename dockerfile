FROM npm
WORKDIR /
RUN npm install
RUN npm run build

FROM nginx
COPY dist/ /usr/share/nginx/html/
COPY nginx/default.conf /etc/nginx/conf.d/default.conf