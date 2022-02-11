module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - Brak wyników ${query} !`);
};