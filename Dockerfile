FROM node:24-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the full app source
COPY . .

# Build the app
RUN npm run build

# Move into standalone directory
WORKDIR /app/.next/standalone

# Copy static files (public assets, etc.)
COPY --from=0 /app/.next/static ./public/_next/static
COPY --from=0 /app/public ./public

# Expose port 80
EXPOSE 80

# Start the standalone server on port 80
CMD ["node", "server.js", "-p", "80"]
