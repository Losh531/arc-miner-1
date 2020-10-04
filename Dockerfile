FROM node:latest
# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install puppeteer --save
RUN npm install express
RUN npm ci --only=production
COPY . .
CMD ["npm", "start"]
