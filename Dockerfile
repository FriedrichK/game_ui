FROM node:20-alpine

EXPOSE 3000

RUN mkdir /opt/frontend
WORKDIR /opt/frontend

RUN npm install next@13.4.10 react@18.2.0 react-dom@18.2.0

COPY . /opt/frontend
WORKDIR /opt/frontend
RUN npm install
RUN npm run build

ENTRYPOINT ["npm", "run", "start"]
