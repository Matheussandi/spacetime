import { PrismaClient } from '@prisma/client'
import fastify from 'fastify'

const app = fastify()
const primsa = new PrismaClient()

app.get('/', async () => {
  const users = await primsa.user.findMany()

  return users
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Listening on port 3333')
  })
