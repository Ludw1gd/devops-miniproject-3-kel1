# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .

# Stage 2: Production (Minimal Image)
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app ./   
USER node                      
EXPOSE 3000
CMD ["node", "main.js"]