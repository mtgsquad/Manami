const { prefix: defultprefix } = require('@root/config.json')
const mongoose = require('mongoose')

const reqString = {
    type: String,
    required: true
}
const guildSchema = mongoose.Schema({
    guildId: reqString,
    prefix: {
        type: String,
        default: defultprefix,
        required: true
    },
    welcome: {
        channelId: {
            type: String,
            required: false
        },
        message: {
            type: String,
            required: false
        }
    }
})

module.exports = mongoose.model('guilds', guildSchema)