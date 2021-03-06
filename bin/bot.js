#!/usr/bin/env node

'use strict';

/**
 * NorrisBot launcher script.
 *
 * @author Luciano Mammino <lucianomammino@gmail.com>
 */

var NorrisBot = require('../lib/norrisbot');

/**
 * Environment variables used to configure the bot:
 *
 *  BOT_API_KEY : the authentication token to allow the bot to connect to your slack organization. You can get your
 *      token at the following url: https://<yourorganization>.slack.com/services/new/bot (Mandatory)
 *  BOT_DB_PATH: the path of the SQLite database used by the bot
 *  BOT_NAME: the username you want to give to the bot within your organisation.
 */
 process.env['BOT_API_KEY'] = 'xoxb-55110450736-2e2ZSgFpHMnIcShMpR0HR0gN'
 console.log(process.env.BOT_API_KEY)

 var token = process.env.BOT_API_KEY;
 var dbPath = process.env.BOT_DB_PATH;
 var name = process.env.BOT_NAME;

 var norrisbot = new NorrisBot({
     token: token,
     dbPath: dbPath,
     name: name
 });

norrisbot.run();
