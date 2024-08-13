const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, 'User must provide the name'],
        trim: true,
        maxlength: [25, 'name cannot be more than 25 characters'],
    },
    completed:{
        type:Boolean,
        default:false,
    },
});


module.exports = mongoose.model('Task', TaskSchema);