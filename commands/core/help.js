module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <nazwa komendy>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');


            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Piach Help' },
                    footer: { text: 'Discord Piacha' },
                    fields: [
                        { name: 'Bot', value: infos },
                        { name: 'Muzyka', value: music },
                        { name: 'Filtry', value: client.filters.map((x) => '`' + x + '`').join(', ') },
                    ],
                    timestamp: new Date(),
                    description: `Aby użyć filtrów, ${client.config.discord.prefix}filter (filtr). Przykład : ${client.config.discord.prefix}filter 8D.`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - Nie ma takiej komendy byku !`);

            message.channel.send({
                embed: {
                    color: 'ORANGE',
                    author: { name: 'Panel Pomocy' },
                    footer: { text: 'Discord Piacha' },
                    fields: [
                        { name: 'Name', value: command.name, inline: true },
                        { name: 'Category', value: command.category, inline: true },
                        { name: 'Aliase(s)', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'Utilisation', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Informacje o komendach.\nMandatory arguments `[]`, optional arguments `<>`.',
                }
            });
        };
    },
};