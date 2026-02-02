const discord = require('discord.js');
const bot = new discord.Client();
const keepAlive = require('./server.js');

bot.once('ready', () => {
  console.log('Hello World!');
  bot.user.setActivity('IDK');
  jt = false;
  ht = false;
  mt = false;
  const logT = bot.channels.cache.get('810976334867071018');
  setInterval(function(){
    mt = true;
    var countDownDate = new Date("November 11, 2021 11:00:00 GMT+02:00").getTime();

    var now = new Date().getTime();
    var timeleft = countDownDate - now;
      
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    if (minutes >=55){
      logT.send(`${ days } : J ${ hours } : H ${ minutes } : m ${ seconds } : s`);
    }
    if (days <= 0 && hours <= 0 && minutes <= 0){
      cha = bot.channels.cache.get(`817099084497551430`);
      cha.setName(`𝗗𝗔𝗡𝗦 𝗨𝗡 𝗜𝗡𝗦𝗧𝗔𝗡𝗧`);
    }else{
      cha = bot.channels.cache.get(`817099084497551430`);
      if (days <= 0){
        if (hours <= 0){
          cha.setName(`⌛ ${ minutes } 𝗺 ⌛`);
        }else{
          cha.setName(`⌛ ${ hours } 𝗛 ● ${ minutes } 𝗺 ⌛`);
        }
      }else{
        cha.setName(`⌛ ${ days } 𝗝 ● ${ hours } 𝗛 ● ${ minutes } 𝗺 ⌛`);
      }
    }
  }, 1000*60*5);
});

bot.on('message', msg => {
  // Prefix for commands
  const prefix = "::";

  if (!msg.content.startsWith(prefix)) return;

  // Splits the command from the prefix
  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  
  // Turns any upper case letters to lower case
  const command = args.shift().toLowerCase();

  // Keeps the bot from triggering commands from other bots
  if (msg.author.bot) return;
  
  if (!msg.guild){
    return msg.reply("Pas message privée !");
  }

  const logT = bot.channels.cache.get('810976334867071018');

  /*function JOUR(){
    j--;
    if (j == 0){
      jt = false;
    }
    if(j <= 0){
      cha.setName(`❗️ OUVERTURE [ PAUSE ]`);
      //logT.send(`**JOUR finis**`);
    } 
    else {
      cha.setName(`🔒 OUVERTURE ( J - ${ j } )`);
      console.log(`Jour : ${ j }`);
      logT.send(`J - ${ j }`);
    }
  }

  function HEURES(){
    h--;
    if (h == 0){
      ht = false;
    }
    if(h <= 0){
      cha.setName(`❗️ OUVERTURE [ PAUSE ]`);
      //logT.send(`**HEURES finis**`);
    } 
    else {	
      cha.setName(`⏳ OUVERTURE ( H - ${ h } )`);
      console.log(`Heures - ${ h }`);
      logT.send(`H - ${ h }`);
    }
  }

  function MINUTES(){
    m--;
    if (m == 0){
      mt = false;
    }
    if(m <= 0){
      cha.setName(`🚪 Dans un instants 🚪`);
      //logT.send(`**MINUTES finis**`);
    } 
    else {	
      cha.setName(`⌛️ OUVERTURE ( ${ m*5 } min )`);
      console.log(`Minutes - ${ m }`);
      logT.send(`m - ${ m }`);
    }
  }
  e = 0;

  if (command === 'time' && args.length >= 1 && args[0] != ""){
    e = 0;
    msg.channel.bulkDelete(1);
    if (args[0] === "J" && args[1] >= 1 && args[1] <=30){
      if (ht == false && mt == false) {
        salon = args[2];
        cha = msg.guild.channels.cache.get(`${salon}`);
        if (cha){
          j = args[1];
          jt = true;
          logT.send(`J - ${ j }`);
          cha.setName(`🔒 OUVERTURE ( J - ${ j } )`);
          if (j > 0){
            setTimeout = setInterval(function() {
              JOUR();
            }, 1000*60*60*24);
          }
          //console.log(`${cha}`);
        }
      }else{
        logT.send(`**TIME** déja utilisé : \njt : ${ jt } \nht : ${ ht } \nmt : ${ mt }`);
      } 
    }else if (args[0] === "H" && args[1] >= 1 && args[1] <=23){
      if (jt == false && mt == false) {
        salon = args[2];
        cha = msg.guild.channels.cache.get(`${salon}`);
        if (cha){
          h = args[1];
          ht = true;
          logT.send(`H - ${ h }`);
          cha.setName(`⏳ OUVERTURE ( H - ${ h } )`);
          if (h > 0){
            setTimeout = setInterval(function() {
              HEURES();
            }, 1000*60*60);
          }
          //console.log(`${cha}`);
        }
      }else{
        logT.send(`**TIME** déja utilisé : \njt : ${ jt } \nht : ${ ht } \nmt : ${ mt }`);
      }
    }else if (args[0] === "m" && args[1] >= 1 && args[1] <=11){
      if (jt == false && ht == false) {
        salon = args[2];
        cha = msg.guild.channels.cache.get(`${salon}`);
        if (cha){
          m = args[1];
          mt = true;
          logT.send(`m - ${ m }`);
          cha.setName(`⌛️ OUVERTURE ( ${ m*5 } min )`);
          if (m > 0){
            setTimeout = setInterval(function() {
              MINUTES();
            }, 1000*60*5);
          }
          //console.log(`${cha}`);
        }
      }else{
        logT.send(`**TIME** déja utilisé : \njt : ${ jt } \nht : ${ ht } \nmt : ${ mt }`);
      }
    }else{
      e = 1;
    }
    console.log('Done !!!!')
  }else if(command === 'time'){
    e = 1;
  }
  
  if (command === "stop" && (typeof(jt) != 'undefined' && typeof(ht) != 'undefined' && typeof(mt) != 'undefined')){
    logT.send(`**STOP**`);
    jt = false;
    ht = false;
    mt = false;
  }else if (command === "stop"){
    let embed = new discord.MessageEmbed()
    .setTitle("COMMAND : `STOP`")
    .setDescription("Erreur sur cette commande, regarde les `informations utiles` ci-dessous pour résoudre le problème !")
    .setColor("#fa2d00")
    .addField("Contexte", "```Salon innexistant```")
    .addField("Résoudre", "```Faire la COMMAND < TIME > ```")
    msg.channel.bulkDelete(1);
    msg.author.send(embed); 
  }*/
  
  if (command === "t" && (typeof(jt) != 'undefined' && typeof(ht) != 'undefined' && typeof(mt) != 'undefined' && typeof(cha) != 'undefined')) {
    logT.send(`jt : ${ jt } \nht : ${ ht } \nmt : ${ mt } \n\ncha : ${ cha }`);
  }else if (command === "t"){
    logT.send(`erreur variables !`);
  }
  if (command === "z" && (typeof(mt) != 'undefined')) {
    logT.send(`mt : ${ mt }`);
  }else if (command === "z"){
    logT.send(`erreur variables Z !`);
  }
  /*
  if (e === 1){
    e = 0;
    let embed = new discord.MessageEmbed()
      .setTitle("COMMAND : `TIME`")
      .setDescription("Erreur sur cette commande, regarde les `informations utiles` ci-dessous pour résoudre le problème !")
      .setColor("#fa2d00")
      .addField("Syntax", "```>> time [ J or H or m ] [ temps ] [ ID salon ]```")
      .addField("Temps", "```< J > Min : 1 // Max : 30\n< H > Min : 1 // Max : 23\n< m > Min : 1 // Max : 11 ```")
    msg.channel.bulkDelete(1);
    msg.author.send(embed);
  }*/


});


keepAlive();
//bot.login(process.env.TOKEN);
