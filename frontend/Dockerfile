FROM node:18.16.1-alpine
WORKDIR /app
COPY package*.json ./
RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*
RUN npm install
COPY . .
RUN npm run build
EXPOSE $TO_EXPOSE_PORT
ENTRYPOINT ["npm", "start"]