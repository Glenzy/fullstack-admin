const ronin = require('ronin-server')
const mocks = require('ronin-mocks')
const database = require('ronin-database')
const server = ronin.server()
try {
  database.connect(process.env.CONNECTIONSTRING)
} catch (error) {
  console.error(error)
}

server.use( '/foo', (req, res) => {
  return res.json({ "foo": "bar" })
})

server.use('/', mocks.server(server.Router(), false, false))
server.start()
console.log('Server started on', process.env.SERVER_PORT)
