const Discord = require('discord.js');
const client = new Discord.Client();

client.on ('ready', () => {
    console.log(`"Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith('!ban')) {
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            if (member) {
                member
                .ban({
                  reason: 'They were bad!',
                })
                .then(() => {
                    message.reply(`Successfully banned ${user.tag}`);
                })
                .catch(err => {
                    message.reply('I was unable to ban the member');
                    console.error(err);
                });
            } else {
                message.reply("That user isn't in this guild!");
            }
        } else {
            message.reply("You didn't mention the user to ban!");
        }
    }
  });
  
client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith('!kick')) {
        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            if (member) {
                member
                .kick('Optional reason that will display in the audit logs')
                .then(() => {
                    message.reply(`Successfully kicked ${user.tag}`);
                })
                .catch(err => {
                    message.reply('I was unable to kick the member');
                    console.error(err);
                });
            } else {
                message.reply("That user isn't in this guild!");
            }
        } else {
            message.reply("You didn't mention the user to kick!");
          }
        }
      });

      client.on('message', message => {
        if (message.content === '!avatar') {
          message.reply(message.author.displayAvatarURL());
        }
      });

      client.on('ready', () => {
        client.user.setActivity('getting developed', { type: 'PLAYING' })
      })

      client.on('message', message => {
        if (message.content === '!ping') {
          message.channel.send('Pong !');
        }
      });

      client.on('message', message => {
        if (message.content === '!help') {
          message.channel.send('```Wait i am not finished ;-;```');
        }
      });


      client.on('message', message => {
        if (message.content === '!testbot'){
        message.channel.send('i am perfectly functionnal')
      } 
      });
      
      client.on('message', message => {
        if (message.content === '!eh'){
          message.channel.send(':(')
        }
      })

      client.on('message', message => {
        if (message.content === '!jerry') {
          message.channel.send('https://tenor.com/view/tom-and-jerry-what-insomnia-no-sleep-gif-13337078');
        }
      });
     

      client.on('message', message => {
        if (message.content === '!working') {
         message.channel.send ('https://tenor.com/view/piggy-working-serious-no-stopping-gif-14501032')
        }
      })

    
      client.on('message', message => {
        if (message.content === '!bedrock') {
          message.reply('nope :(');
        }
      });
     
      client.on('message', message => {
        if (message.content === '!?') {
          message.delete
          message.channel.send('WHAT');
        }
      });
    
      client.on("message", async message => {
        const prefix = "!";

        if (message.author.bot) return;
        if (!message.guild) return;
        if (!message.content.startsWith(prefix)) return;
    

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();
    
        if (cmd === "pinga") {
            const msg = await message.channel.send(`🏓 Pinging....`);
            msg.edit(`🏓 Pong!\nLatency is ${Math.floor(msg.createdTimestap - message.createdTimestap)}ms\nAPI Latency is ${Math.round(client.ping)}ms`);
        }
      
      
          if (cmd === "say") {
              if (message.deletable) message.delete();
      
              if (args.length < 0) return message.reply(`Nothing to say?`).then(m => m.delete(5000));
              
              
              const roleColor = message.guild.me.highestRole.hexColor;
  
              if (args[0].toLowerCase() === "embed") {
                  const embed = new RichEmbed()
                      .setDescription(args.slice(1).join(" "))
                      .setColor(roleColor === "#000000" ? "#ffffff" :  roleColorv)
                      .setTimestamp()
                      .setImage(client.user.displayAvatarURL)
                      .setAuthor(message.author.username, message.author.displayAvatarURL);
      
                  message.channel.send(embed);
              } else {
                  message.channel.send(args.join(" "));
              }
          }
      }); 


    client.login('NzAzMjQwNTYyOTE2MDY1MzMy.XqL2yw.j26-RaAkdsek-TTzfJh4YsPATEE')