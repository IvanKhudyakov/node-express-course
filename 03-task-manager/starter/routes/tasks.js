const express = require('express');
const router = express.Router();
const {addTask, getTasks, updateTask, deleteTask, getSingleTask} = require("../controllers/tasks");

router.route('/').get(getTasks).post(addTask);
router.route('/:id').get(getSingleTask).patch(updateTask).delete(deleteTask);


module.exports = router;