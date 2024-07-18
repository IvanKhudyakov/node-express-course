const Task = require('../models/task')

const getTasks = (req, res) => {
    res.json({"succeded": true, "message": "all tasks are retrieved"});
}
const addTask = async (req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({task});
}
const getSingleTask = (req, res) => {
    res.json({"succeded": true, "message": "Single task is retrieved"});
}
const updateTask = (req, res) => {
    res.json({"succeded": true, "message": "Task is updated"});
}
const deleteTask = (req, res) => {
    res.json({"succeded": true, "message": "Task was deleted"});
}



module.exports = {getTasks, addTask, getSingleTask, updateTask, deleteTask};