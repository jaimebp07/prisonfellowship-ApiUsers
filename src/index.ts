import express from 'express'
import peopleContactRoutesModule from './routes/User.ts'

const app = express()


async function start () {

  app.use('/', peopleContactRoutesModule)

  const PORT = process.env.PORT ?? 3000

  app.listen(PORT, () =>
    console.log('Server on port', PORT)
  )
}

start()