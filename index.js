
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

	if (command === "bonib"){
        message.channel.send('BoniBOT!');
    }

    if (!message.member.roles.has("567561659099381770") && message.content.includes("música", "musica", "Musica", "Música", "MUSICA", "MUSICA")){
        message.channel.send('Não :)');
    }

    if (command === "kick"){
        const taggedUser = message.mentions.users.first();
        if (!message.member.hasPermission(`KICK_MEMBERS`)) {
            message.channel.send(`Bem, ${message.author}, mas me parece que você não tem as permissões necessárias pra kickar alguém...`);
        }        
        if (message.mentions.roles.size){
            message.reply(`Espero que você saiba que eu não consigo kickar cargos inteiros.`);
        }
        if (!message.mentions.users.size){
            message.reply(`Eu preciso de alguém pra poder kickar, sabe?`);
        }
        if (taggedUser){  
            const member = message.guild.member(taggedUser);   
            member.kick().then(() => {
                message.channel.send(`E foi assim, que mais uma vez, ${taggedUser} foi kickado!`);
            })
            .catch(err =>{
                console.log(err);
            });
        }
    }
});

client.login(token);