FROM node:latest
WORKDIR /app
COPY package.json .
ARG NODE_ENV
RUN if [ $NODE_ENV == "development" ];\
    then \
    npm install; \
    else \ 
    npm instal --only=production; \
    fi 
COPY . .
CMD [ "npm","run","start" ]
