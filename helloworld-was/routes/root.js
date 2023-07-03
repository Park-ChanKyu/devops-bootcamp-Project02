'use strict'

module.exports = async function (fastify, opts) {
  fastify.get('/', async function (request, reply) {
    // return { root: true }
    console.log('[INFO] Mongo DB Connection Try..')
    const client = await fastify.mongo.client.connect();
    try {
      if (client !== null) {
        console.log('[INFO] Mongo DB Connection Success!')
        reply.code(200).send()
      }
    } finally {
      client.close();
    }
  })
}
