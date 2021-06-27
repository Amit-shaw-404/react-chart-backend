const mongoose = require('mongoose');

const activitySchema=new mongoose.Schema({
    activities:[{
        activity:String,
        hours:String,
    }],
    count:{
        type:Number,
        default:0,
    }
})

module.exports=mongoose.model('usertables', activitySchema);