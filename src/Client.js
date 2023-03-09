require('dotenv').config()
const { Client, IntentsBitField } = require('discord.js')

class MoeClient extends Client {
    constructor(options) {
        super({
            intents: [
                IntentsBitField.Flags.Guilds,
                IntentsBitField.Flags.GuildMessages,
                IntentsBitField.Flags.MessageContent
            ]
        })
    }
}

module.exports.Client = MoeClient;