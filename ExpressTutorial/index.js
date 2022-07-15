var express = require('express'); //module initialize
const cors = require('cors');
const bodyParser = require('body-parser');
var app = express(); //create object

//here we can customize from where we want to allow request and block rest
const corsOptions = {
    origin: `https://${DOMAIN}`, //define explicit domain to allow request
    optionsSuccessStatus: 200
  };

app.use(cors(corsOptions)); //cors object

//body parser allows only specific type of data coming from 'view'
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb', extended: true }));


//define route
app.get('/', function (req, res) {
   res.send('Hello World');
})

//create server
var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
});

