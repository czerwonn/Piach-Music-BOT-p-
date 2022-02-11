module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Muzyka zatrzymana z powodu opuszczenia kanału głosowego !`);
};