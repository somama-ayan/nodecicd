FROM node:18

WORKDIR /app/

COPY package*.json ./

COPY . /app/ 
# RUN npm install
# RUN npm install -g nodemon

CMD ["node" , "server.js"]