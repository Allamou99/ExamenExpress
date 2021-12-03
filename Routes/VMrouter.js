const express = require('express');
const vmsRouter = express.Router();
const vms = require('../Models/VirtulMachine');
const bodyParser = require('body-parser');
vmsRouter.use(bodyParser.json());


vmsRouter.route('/')
.get((req,res,next)=>{
    vms.find({})
    .then((vms)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type','application/json');
        res.json(vms);
    },(err)=>next(err))
    .catch((err)=>next(err)); 
})
.post((req,res,next)=>{
    vms.create(req.body)
    .then((vm)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type',"application/json");
        res.json(vm);
    },(err)=>next(err))
    .catch((err)=>next(err)
    )
})
vmsRouter.route('/:vmId')
.put((req,res,next)=>{
    vms.findByIdAndUpdate(req.params.vmId,{
        $set: req.body
    }, {new:true})
    .then(update=>{
        res.statusCode = 200;
        res.setHeader('Content-Type',"application/json");
        res.json(update);
    })
})

module.exports = vmsRouter
