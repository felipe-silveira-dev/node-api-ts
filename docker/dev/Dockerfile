FROM node:lts-alpine

WORKDIR /app

COPY package.json yarn.lock /app/

RUN apk add --update --no-cache gcc python3 make g++ \
  && yarn

CMD yarn dev