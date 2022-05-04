FROM node:alpine
ADD . /app
RUN cd /app && yarn
ENTRYPOINT ["yarn", "serve-imp-express-api"]
