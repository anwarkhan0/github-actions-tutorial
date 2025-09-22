FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package.json & install deps
COPY package*.json ./
RUN npm install --production

# Copy source code
COPY . .

# Expose port & start app
EXPOSE 3000
CMD ["npm", "start"]
