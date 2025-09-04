FROM node:24.6.0-alpine AS build
WORKDIR /app
COPY package*.json svelte.config.js ./
RUN npm install
COPY . .
RUN npm run build

FROM node:24.6.0-alpine
WORKDIR /app
COPY --from=build /app /app
EXPOSE 5173
CMD ["node", ".svelte-kit/output/server/index.js"]
