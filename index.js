//Defining discord.js
const Discord = require('discord.js')

//Making our client
const client = new Discord.Client()

//add our config to our main code file
const config = require('./config.json')

//Emit a event once our client is online

//Client.once is a listener event keep that in mind
client.once('ready', () => {
 console.log('Hello world')
})



//Make our message event
client.on('message', message => {
   //Do some essentials so our bot doesnt crash
   if(!message.content.startsWith(config.prefix)) return; //What this does is ignore message that dont start with our prefix
   if(message.author.bot) return; //This ignores bots

    if(message.content === `${config.prefix}helloworld`) {
        message.channel.send('Hello world')
        //Or what we can do to dm the author is
        //message.author.send('Hello world')
    }
})


//Logging in our client
//Lets secure our bot token because if someone gets a hold of it you will get the consquences
client.login(config.token)

//Now no one can steal your token
