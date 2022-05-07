FROM node:alpine as builder
COPY . /app
RUN cd /app && npm install


FROM builder as builder
COPY --from=builder /app /app
ENTRYPOINT ["npm run", "serve-imp-api"]

