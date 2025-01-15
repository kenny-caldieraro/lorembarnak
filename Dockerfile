FROM node:16
WORKDIR /LOREM_BARNAK
COPY ./package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]