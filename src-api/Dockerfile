FROM node:alpine as builder
COPY . /app
RUN cd /app && yarn


FROM builder as builder
COPY --from=builder /app /app
ENTRYPOINT ["yarn", "serve-imp-api"]

