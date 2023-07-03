const fp = require('fastify-plugin')
const { MONGO_HOSTNAME, MONGO_USERNAME, MONGO_PASSWORD } = process.env
module.exports = fp(async function (fastify, opts) {

  fastify.register(require('@fastify/mongodb'), {
    // force to close the mongodb connection when app stopped
    // the default value is false
    forceClose: true,
    url: `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/?authMechanism=DEFAULT`
  })
})