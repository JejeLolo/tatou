FROM docker.io/node:16-alpine

RUN apk add --no-cache tini
RUN addgroup -S tatou-frontend
RUN adduser -S tatou-frontend -G tatou-frontend
USER tatou-frontend

COPY --chown=tatou-frontend:tatou-frontend . /app
WORKDIR /app

RUN yarn install \
    --prefer-offline \
    --frozen-lockfile \
    --non-interactive \
    --production=false

ENV HOST 0.0.0.0
ENV PORT 80
EXPOSE 80

ENTRYPOINT [ "/sbin/tini", "--" ]
CMD [ "yarn", "start" ]