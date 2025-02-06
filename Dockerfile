# Use the official Node.js image as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application files into the container
COPY . .

# Expose the port your app runs on
EXPOSE 3110

# Command to start the application
CMD ["npm", "start"]
