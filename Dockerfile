FROM node:latest
# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm ci --only=production
COPY . .
CMD [ "bash main.sh" ]
