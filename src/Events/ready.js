/**
 * @param { import('../Client').Client } Client 
 */

const ClientReady = async function(Client) {
    console.log(require('chalk').red(Client.user.username) + require('chalk').blue(' is Online'))
}

module.exports = ClientReady;