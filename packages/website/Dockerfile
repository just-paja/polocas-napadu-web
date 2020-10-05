FROM alpine

RUN apk add --update nodejs npm

WORKDIR /usr/src/app

ENV NODE_PORT=80
ENV NODE_ENV=production

ADD polocas-napadu-website.tgz .

WORKDIR /usr/src/app/package

RUN npm ci --only=production --no-optional

EXPOSE 80

CMD [ "npm", "run", "start" ]
