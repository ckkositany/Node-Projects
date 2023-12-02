const Task=require('../models/Task')

const getAllTasks= (req,res)=>{
    res.send('<h1>Get all tasks</h1>')
}
const createTask=async (req,res)=>{
    try {
        const task = await Task.create(req.body)
    res.status(201).json({task})
    console.log(req.body)
    } catch (error) {
        res.status(500).json({msg: error })
        console.log(error)
    }
    
}
const getTask=(req,res)=>{
    res.json({id:req.params.id})
    console.log({id:req.params.id})
}
const updateTask=(req,res)=>{
    res.send('<h1>Update task</h1>')
}
const deleteTask=(req,res)=>{
    res.send('<h1>Delete task</h1>')
}

module.exports={
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}