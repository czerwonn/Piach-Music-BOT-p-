module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} został dodany (**${playlist.tracks.length}** piosenek) !`);
};