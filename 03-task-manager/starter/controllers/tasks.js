const Task = require('../models/task');
const asyncWrapper = require('../middleware/async');
const {createCustomError} = require('../errors/custom-error');
const getTasks = asyncWrapper(async (req, res) => {
        const tasks = await Task.find({});
        // res.json({"succeded": true, "message": "all tasks are retrieved"});
        res.status(200).json({tasks});
})
const addTask = asyncWrapper(async (req, res) => {
        const task = await Task.create(req.body);
        res.status(201).json({task});
})
const getSingleTask = asyncWrapper(async (req, res, next) => {
        const {id:taskId} = req.params;
        const task = await Task.findOne({_id:taskId});
        
        if (!task) {
            return next(createCustomError(`No task with the id: ${taskId}`, 404));
            // return res.status(404).json({msg : `No task with the id: ${taskId}`});
        }
        // res.json({"succeded": true, "message": "Single task is retrieved"});
        res.status(200).json({task});
})
const updateTask = asyncWrapper(async (req, res, next) => {
        const {id:taskId} = req.params;
        const task = await Task.findOneAndUpdate({_id:taskId}, req.body, {
            new: true, runValidators: true
        });
        // res.json({"succeded": true, "message": "Task is updated"});
        if (!task) {
            return next(createCustomError(`No task with the id: ${taskId}`, 404));
            // return res.status(404).json({task});
        }
        res.status(200).json({id: taskId, data: req.body});
    
})
const deleteTask = asyncWrapper(async (req, res) => {
        const {id:taskId} = req.params;
        const task = await Task.findOneAndDelete({_id:taskId}); //check docs on what is the difference between delete and remove
        if (!task) {
            return next(createCustomError(`No task with the id: ${taskId}`, 404));
            // return res.status(404).json({msg : `No task with the id: ${taskId}`});
        }
        // res.json({"succeded": true, "message": "Task was deleted"});
        res.status(200).json({msg: "Task was deleted", task: task});
})

module.exports = {getTasks, addTask, getSingleTask, updateTask, deleteTask};