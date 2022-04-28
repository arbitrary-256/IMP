FROM node:alpine
WORKDIR /app
COPY package.json /app
RUN yarn
COPY .env /app
COPY src /app/src
COPY api.ts /app
RUN yarn tsc api.ts --skipLibCheck --removeComments
ENTRYPOINT ["node", "api.js"]
