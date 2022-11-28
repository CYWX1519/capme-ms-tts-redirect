import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as router from 'router'

const app = express()

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000

app.use(bodyParser.text({ type: '*/*' }))
app.use(express.static('public'))
app.use('router', router)

app.get('/api/legado', require('./api/legado'))
app.post('/api/ra', require('./api/ra'))
app.get('/api/azure', require('./api/azure'))
app.post('/api/azure', require('./api/azure'))
app.get('*', function (req, res) {
  res.redirect('/')
})
app.listen(port, () => {
  console.info(`应用正在监听 ${port} 端口`)
})
