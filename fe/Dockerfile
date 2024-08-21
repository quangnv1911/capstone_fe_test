FROM node:21-alpine3.17 as base

ENV DOCKER_WORKDIR="/app"
ENV BUILD_DATE="1970-01-01T00:00:00.00Z"
ENV BUILD_VERSION="0.0.0.0"
ENV BUILD_COMMIT="0000000"
ENV NODE_ENV="production"
ENV PORT="3000"

# LABEL org.label-schema.build-date="${BUILD_DATE}"
# LABEL org.label-schema.name="it4c:frontend"
# LABEL org.label-schema.description="IT4C Frontend Boilerplate"
# LABEL org.label-schema.usage="https://github.com/IT4Change/boilerplate-frontend/blob/master/README.md"
# LABEL org.label-schema.url="https://github.com/IT4Change/boilerplate-frontend"
# LABEL org.label-schema.vcs-url="https://github.com/IT4Change/boilerplate-frontend/tree/master/"
# LABEL org.label-schema.vcs-ref="${BUILD_COMMIT}"
# LABEL org.label-schema.vendor="IT4C"
# LABEL org.label-schema.version="${BUILD_VERSION}"
# LABEL org.label-schema.schema-version="1.0"
# LABEL maintainer="info@it4c.dev"

EXPOSE ${PORT}

RUN mkdir -p ${DOCKER_WORKDIR}
WORKDIR ${DOCKER_WORKDIR}

##################################################################################
# DEVELOPMENT ####################################################################
##################################################################################
FROM base as development

CMD /bin/sh -c "npm install && npm run dev"

##################################################################################
# BUILD ##########################################################################
##################################################################################
FROM base as build

COPY . .
RUN npm install --include=dev --frozen-lockfile --non-interactive
RUN npm run build

##################################################################################
# PRODUCTION #####################################################################
##################################################################################
FROM base as production

COPY --from=build ${DOCKER_WORKDIR}/build ./build
COPY --from=build ${DOCKER_WORKDIR}/server ./server
COPY --from=build ${DOCKER_WORKDIR}/package.json ./package.json
COPY --from=build ${DOCKER_WORKDIR}/package-lock.json ./package-lock.json
COPY --from=build ${DOCKER_WORKDIR}/tsconfig.json ./tsconfig.json
RUN npm install --omit=dev --frozen-lockfile --non-interactive

CMD /bin/sh -c "npm run server:prod"
