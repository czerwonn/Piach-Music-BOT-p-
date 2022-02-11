module.exports = (client, message, track) => {
    message.channel.send(`${client.emotes.music} - Aktualnie ${track.title} w ${message.member.voice.channel.name} ...`);
};