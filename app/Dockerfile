# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .

# Stage 2: Production (Minimal Image)
FROM node:18-alpine
WORKDIR /app
# jalanin sebagai user non-root untuk keamanan (DevSecOps Basic)
USER node
COPY --from=builder /app ./
EXPOSE 3000
CMD ["node", "main.js"]