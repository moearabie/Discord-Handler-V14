const { Client } = require('./src/Client')

const client = new Client({ phoneStatus: true })

client.login(process.env.Token)