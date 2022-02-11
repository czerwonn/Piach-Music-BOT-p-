module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - Wybór został **odrzucony** !`);
    } else message.channel.send(`${client.emotes.error} - Wybierz numer pomiedzy **1** i **${tracks.length}** !`);
};