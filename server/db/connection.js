const monk = require('monk');
const connectionString ="mongodb+srv://davidchan:lol@cluster0.wtnzd.mongodb.net/messages?retryWrites=true&w=majority";
const db = monk(connectionString);

module.exports = db;

{/*connect to mongodb easily using monk middleware*/}