# === Build Stage ===
FROM node:24-alpine AS builder

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy app source code
COPY . .

# Build the Next.js app
RUN npm run build

# === Runtime Stage ===
FROM node:24-alpine

WORKDIR /app

# Copy standalone output from builder stage
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./public/_next/static

# Expose port 80
EXPOSE 80

# Start server
CMD ["npm", "start"]
