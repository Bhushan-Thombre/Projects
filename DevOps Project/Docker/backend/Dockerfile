FROM node:20-alpine

RUN npm install -g nodemon

WORKDIR /eDukan

COPY package*.json .

RUN npm install --silent

COPY . .

EXPOSE 5000

CMD sh -c "npm run data:import && npm run server"