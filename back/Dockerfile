# Build stage
FROM node:24.6.0-alpine AS build
WORKDIR /app
COPY package*.json tsconfig.json ./
RUN npm install
COPY . .
RUN npm run build

# Run stage
FROM alpine:3.20
RUN apk add --no-cache nodejs
WORKDIR /app
COPY --from=build /app/dist /app/
COPY --from=build /app/package*.json /app/
# Install only production dependencies
RUN npm install --omit=dev
EXPOSE 3000
CMD ["node", "dist/app.js"]