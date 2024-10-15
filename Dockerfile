# Use the official Node.js image from the Docker Hub
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project into the container
COPY app ./app

# Expose the port on which the app will run
EXPOSE 8000

# Command to run the application
CMD ["npm", "start"]
