FROM node:16-bullseye

ENV NODE_ENV=production

COPY . .

RUN npm install

EXPOSE 3000
ENTRYPOINT ["dumb-init", "--"]
CMD [ "npm", "start" ]
