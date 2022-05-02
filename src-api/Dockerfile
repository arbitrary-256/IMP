FROM node:alpine
WORKDIR /app
COPY *.json /app
COPY .env /app
RUN yarn
COPY src /app/src
COPY impAPI.ts /app
RUN yarn tsc impAPI.ts --removeComments --skipLibCheck
# COPY . /app
# RUN cd app \
#     && yarn \
#     && yarn tsc impAPI.ts --removeComments --skipLibCheck
ENTRYPOINT ["node", "impAPI.js"]
