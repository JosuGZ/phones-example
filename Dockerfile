FROM node:8
WORKDIR /usr/src/app
COPY ./build /usr/src/app
EXPOSE 3000
CMD [ "node", "server.js" ]
