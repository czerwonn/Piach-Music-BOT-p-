module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - W kolejce skończyła się lista piosenek !`);
};