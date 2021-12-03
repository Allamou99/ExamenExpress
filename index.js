const http = require('http');
var express = require('express');
var app = express();
var vmsRouter = require('./Routes/VMrouter');
const mongoose = require('mongoose');
var cors = require('cors')
var configDev = require('./dev');
var configProd = require('./prod');
app.use(cors());
var link = process.env.MONGODB_URI;
const connect = mongoose.connect(link);
connect.then((db)=>{
  console.log('Connected to atlas mongodb Database');
}, (err)=>{console.log(err); });


app.use('/vms', vmsRouter);

const port = 3000;
const hostname='0.0.0.0';
var server = http.createServer(app)
server.listen(port ,hostname,()=>{
    console.log('Server is running on port ' + port);
})

module.exports = app;