const express = require('express');

const app = express();
app.get("/", function(request, response) {
    console.log(Date.now() + " Ping Received");
    response.sendStatus(200);
});
// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
    response.sendFile(__dirname + '/src/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});