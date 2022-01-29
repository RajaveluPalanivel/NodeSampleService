const express = require('express');
const server = express();

const Request = require('request');

const PORT =process.env.PORT || 5000;

server.use(express.json());

const channels = []
const lessons = []



server.get('/', function (req, res) {
    res.json({ Hello: "Raja" });
});

server.get('/api/channels', function (req, res) {
    res.status(200).json(channels);
});

server.listen(5000, () => {
    console.log('\n*** Server running on http://localhost:' + PORT);
});


server.post('/api/channels', function (req, resOut) {
   
    console.log("Body:" + JSON.stringify(req.body));
    Request.post({
        "headers": {
            "Content-Type": "application/json",
            "api-key": "WXNDC2OfhluWCsmpjsjrX5uA7nA16PPIy3h5ty7X83B4SFutHpHjTVLjNw21SkU8"
        },
        "url": "https://data.mongodb-api.com/app/data-mlytw/endpoint/data/beta/action/insertOne",
        "body": JSON.stringify(req.body)
    }, (error, response, body) => {
        if (error) { console.log("Error message is: " + error) }
        else {
            console.log("The Response is: " + JSON.stringify(body));
            resOut.status(201).json(body);
        }
    });

    resOut.status(201).json(req.body);
});
