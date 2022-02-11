module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - Na tym serwerze nie gram żadnej muzyki !`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Nie jesteś połączony z kanałem głosowym !`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Admin permisje zjebałeś !`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${client.emotes.error} - ${args[0].title} niedozwolone w twoim kraju! Pomijanie...`);
            break;
        case 'MusicStarting':
            message.channel.send(`Muzyka zaczyna grać... proszę o cierpliwość!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - https://bit.ly/3LoRO8n`);
    };
};
