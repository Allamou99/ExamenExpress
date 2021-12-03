const http = require('http');
var express = require('express');
var app = express();
var vmsRouter = require('./Routes/VMrouter');
const mongoose = require('mongoose');
var cors = require('cors')
var configDev = require('./dev');
var link = "";
var environment = process.env.NODE_ENV.toString();
var connexionResponse ='Connected to the Server : ';

var hostname='localhost';

if(environment.localeCompare('dev ') == 0){
    link = configDev.link;
    connexionResponse+='Local database';
  }
  if(environment.localeCompare('prod')== 0){
    link = process.env.MONGODB_URI;
    connexionResponse+='Atlas cloud database';
    hostname='0.0.0.0'
  }

const connect = mongoose.connect(link);
connect.then((db)=>{
  console.log(connexionResponse);
}, (err)=>{console.log(err); });

app.use(cors());
app.use('/vms', vmsRouter);

const port = process.env.PORT || 3000;
var server = http.createServer(app)
server.listen(port ,hostname,()=>{
    console.log('Server is running on port ' + port);
})
module.exports = app;