const mongoose = require('mongoose')

var Task = mongoose.model('Task',{
    storeGroup: {type:String},
    startDate: {type:Date},
    endDate: {type:Date},
    state : {type:String},
    region : {type:String},
    area : {type:String},
    stores : {type:String},
    taskName : {type:String},
    taskDescription:{type:String}
});

module.exports = { Task }