FROM ubuntu

RUN apt-get update && apt-get install -y curl

RUN curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
RUN apt-get update && apt-get install -y nodejs

RUN npm install -g http-server

RUN mkdir /app

ARG externalip
ENV EXTERNAL_IP=$externalip

COPY . /app
RUN cd /app; npm install
RUN cd /app; ./node_modules/gulp/bin/gulp.js

CMD http-server /app/build
