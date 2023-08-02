# Use the official Node.js 14 image as the base image
FROM node:19-bullseye
# Set the working directory in the container
WORKDIR /app
# Copy package.json and package-lock.json (if exists)
COPY ./package.json ./package-lock.json /app/
# Install app dependencies
RUN npm install
# Copy the rest of the application code
COPY . /app/
# Expose the port on which your app is running (default for NestJS is 3000)
EXPOSE 3000
# Start the app
CMD ["npm", "run", "start:dev"]
