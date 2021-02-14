{/*install joi, use connection to mongodb*/}
const { required } = require('joi');
const Joi = require('joi');
const db = require('./connection');
{/*allow to reuse mongodb connection across node*/}

{/*join message schema*/}
const schema = Joi.object().keys({
    username: Joi.string().required(),
    subject: Joi.string(),
    message: Joi.string(),
    imageURL: Joi.string().uri()
})

{/*constant that gets messages from db*/}
const messages = db.get('messages');

{/*get all messages from db*/}
function getAll(){
    return messages.find();
}

{/*if there is no username, anon will be used*/}
{/*if there are no validation errors, then create the message*/}
{/*sets created message to a new date object then insert message into database*/}
{/*otherwise reject it asynchronously */}
function create(message){
    if(!message.username) message.username = 'Anon';
    if(!message.subject) message.subject = ' ';
    if(!message.message) message.message = ' ';
    
    const validation = schema.validate(message);
    
    if(validation.error == null){
        message.created = new Date();
        return messages.insert(message);
    } else {
        return Promise.reject(validation.error);
    }
}
module.exports = {
    create,
    getAll
};
{/*export functions*/}