FROM node:alpine
WORKDIR /app
COPY *.json /app
COPY .env /app
RUN yarn
COPY src /app/src
COPY api.ts /app
RUN yarn tsc api.ts --removeComments --skipLibCheck
# COPY . /app
# RUN cd app \
#     && yarn \
#     && yarn tsc api.ts --removeComments --skipLibCheck
ENTRYPOINT ["node", "api.js"]
