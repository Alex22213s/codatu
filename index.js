const Discord = require("discord.js");
const { EventEmitter } = require("events");
const Client = new Discord.Client();
const prefix = "c!";

Client.on('ready', ()=>{
    console.log("Botul este online.");
    Client.user.setActivity("c!help");
})

Client.on('message', (message)=>{
    if(!message.content.startsWith(prefix)) return;

if(message.content.startsWith(prefix + "help")){
   message.channel.send("**Comenzi:** __c!support | c!staff | c!jail | c!ping | c!sclavi | c!wlc | c!8ball | c!zi | c!kick | c!ban__ **In curand mai multe comenzi.**");
}
if(message.content.startsWith(prefix + "support")){
    message.channel.send("Aici se afla creatorul meu! https://discord.gg/DpM67px");
}
if(message.content.startsWith(prefix + "staff")){
    message.channel.send("***Cei care au contribuit la crearea botului sunt:*** **__Davidﾉ ᴬᶜᵉ#7934__**, **__ᴪArkaniaN#6666__**, **__ᴪNiroS#9780__**, **__Marian ⥌ ʜʟ#9999__**");
}
if(message.content.startsWith(prefix + "jail")){
    message.channel.send("Ai adus Jilava aici, manca-ti-as... :rofl:");
}
if(message.content.startsWith(prefix + "ping")){
    message.channel.send("15.0234923423429323 ms")
}
if(message.content.startsWith(prefix + "sclavi")){
    message.channel.send("**Sclaveti:** **__Futix__** deocamdata ca ala e gay");
}
if(message.content.startsWith(prefix + "wlc")){
    message.channel.send("**Salut, si bine ai venit pe serverul Codatu's Land. Speram sa-ti faci noi prieteni si sa te distrezi aici cu noi!**");
}

})
Client.on('message', function (message) {
	if (message.content.includes('muie')) {
		return message.reply('Fara injuraturi.')
	}
})
Client.on('message', function (message) {
	if (message.content.includes('pula')) {
		return message.reply('Fara injuraturi.')
	}
})
Client.on('message', function (message) {
	if (message.content.includes('mortii ma-tii')) {
		return message.reply('Fara injuraturi.')
	}
})
Client.on('message', function (message) {
	if (message.content.includes('pizda')) {
		return message.reply('Fara injuraturi.')
	}
})
Client.on('message', function (message) {
	if (message.content.includes('niros')) {
		 message.channel.send('Regele vostru din infern')
	}
})
Client.on('message', function (message) {
	if (message.content.includes('marian')) {
		 message.channel.send('Sclavul tuturor')
	}
})
Client.on('message', function (message) {
	if (message.content.includes('arkanian')) {
		 message.channel.send('Detinatorul smecheriei.')
	}
})
Client.on('message', function (message) {
	if (message.content.includes('website')) {
		 message.channel.send('https://codatu.odoo.com/')
	}
})
Client.on('message', function(message) {
	if (message.content.startsWith(prefix + 'zi ')) {
		return message.reply(message.content.substring('say '.length));
	}
})
Client.on('message', function (message) {
	if (message.content.startsWith(prefix + '8ball')) {
		const replies = ["Este cert",
		"Este decis, deci",
			"Fara indoiala.",
		"Da, cu siguranta.",
			"Te poti baza pe asta.",
		"Asa cum o vad, da.",
			"Cel mai probabil",
		"Arata bine",
			"Da",
		"Semnele indica ca da",
			"Innebunesc, incearca din nou.",
		"Intreaba iar mai tarziu",
			"Mai bine sa nu-ti spun acum.",
		"Nu pot prezice acum",
			"Concentreaza-te si intreaba iar.",
		"Nu te baza pe asta",
			"Raspunsul meu spune nu.",
		"Sursele mele spun ca nu",
			"Perspectiva nu e chiar asa de buna.",
		"Foarte indoielnic."];
			message.replytext = Math.floor((Math.random() * replies.length) + 0);
		return message.reply(replies[message.replytext]);
	  }
if (message.content.startsWith(prefix + 'kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`L-am sutat cu succes pe ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('Nu am putut sa sutez membrul.');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("Acest membru nu e pe server!!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("Nu ai mentionat pe cineva pe care sa-l sutez temporar!");
    }
  }
if (message.content.startsWith(prefix + 'ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         */
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`L-am sutat cu succes pe ${user.tag}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('Nu am putut suta membru.');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("Acest membru nu este pe server!");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.reply("Nu ai mentionat pe cineva pe care sa-l sutez permanent!");
    }
  }
});
Client.login("Your secret token OwO");
