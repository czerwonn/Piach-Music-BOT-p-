module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Muzyka została automatycznie zatrzymana z powodu braku użytkowników na kanale głosowym !`);
};