const http = require('http');
var express = require('express');
var app = express();
var vmsRouter = require('./Routes/VMrouter');
const mongoose = require('mongoose');
var cors = require('cors')
var configDev = require('./dev');
app.use(cors());

const connect = mongoose.connect(configDev.link);
connect.then((db)=>{
  console.log('Connected to local mongodb Database');
}, (err)=>{console.log(err); });


app.use('/vms', vmsRouter);

const port = 3000;
const hostname = 'localhost'
var server = http.createServer(app)
server.listen(port ,hostname,()=>{
    console.log('Server is running on port ' + port);
})

module.exports = app;