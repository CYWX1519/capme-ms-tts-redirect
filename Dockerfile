FROM node:slim

WORKDIR /app

COPY ./ ./
RUN npm install && npm run build

ENV TOKEN= PORT=3000

EXPOSE $PORT

CMD [ "node", "./dist/app.js" ]