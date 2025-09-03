# Build stage
FROM node:24.6.0-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .

# Run stage
FROM alpine:3.20
RUN apk add --no-cache nodejs
WORKDIR /app
COPY --from=build /app /app
EXPOSE 3000
CMD ["node", "index.js"]