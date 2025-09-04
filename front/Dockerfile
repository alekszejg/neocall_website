FROM node:24.6.0-alpine AS build
WORKDIR /app
COPY package*.json svelte.config.js ./
RUN npm install
COPY . .
RUN npm run build

FROM node:24.6.0-alpine
WORKDIR /app
COPY --from=build /app/build /app/build
COPY --from=build /app/package*.json /app/
RUN npm install --omit=dev
EXPOSE 3000
CMD ["node", "build/index.js"]
