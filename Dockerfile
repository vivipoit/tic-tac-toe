FROM node:21-alpine

WORKDIR /tic-tac-toe/

COPY public/ /tic-tac-toe/public
COPY src/ /tic-tac-toe/src
COPY package.json /tic-tac-toe/

RUN npm install

CMD ["npm", "start"]