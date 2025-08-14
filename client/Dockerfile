FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install --only=prod
COPY . .

ENV NODE_ENV=development

EXPOSE 3000 9229

CMD ["npm", "run", "dev"]