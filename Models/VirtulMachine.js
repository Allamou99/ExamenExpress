var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var VirtualMachineSchema = new Schema({
    MachineName:{
        type:String,
    },
    AdressIp:{
        type:String,
    },
    Arrete:{
        type:Boolean,
    },
})
module.exports = mongoose.model('Vms', VirtualMachineSchema);