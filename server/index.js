{/*set constants to require all packages*/}
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
require('dotenv').config();

{/*constant that gets messages from db*/}
const messages = require('./db/messages');

{/*set constant app as express method*/}
const app = express();

{/*use all middleware*/}
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send({
      message: 'message board'
    });
  });

{/*if on messages route, get all messages*/}
app.get('/messages', (req, res) => {
    messages.getAll().then((messages) => {
        res.send(messages);
    })
});

{/*post all messages*/}
app.post('/messages', (req, res) => {
    console.log(req.body);
    messages.create(req.body).then((message) => {
        res.json(message);
    }).catch((error) => {
        res.status(500);
        res.json(error);
    });
})

{/*listen to heroku port or 5050*/}
const port = process.env.PORT || 5050;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})