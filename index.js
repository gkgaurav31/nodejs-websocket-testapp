const WebSocket = require('ws')

const port = process.env.PORT || 1337;

const wss = new WebSocket.Server({ port: port })
 
wss.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received message => ${message}`)
  })
  ws.send('Hello! Message From Server!!')
})