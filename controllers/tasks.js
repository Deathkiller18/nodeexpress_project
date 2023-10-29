const Task=require('../model/task')

const getAllTask=async(req,res)=>{
    try{
        const tasks=await Task.find({})
        res.status(201).json({  tasks  })
    }catch(error){
        res.status(500).json({  msg:error  })
    }
}

const crateTask=async(req,res)=>{
    try{
        const task=await Task.create(req.body)
        res.status(201).json({  task  })
    }catch(error){
        res.status(500).json({  msg:error  })
    }
}

const getTask=async(req,res)=>{
    try{
        const { id: TaskId}=req.params
        const task= await Task.findOne({ _id : TaskId})
        if(!task){
            return res.status(404).json({msg: `NO task with id:${TaskId}`})
        }
        res.status(201).json({ task })
    }catch(error){
        res.status(500).json({  msg:error  })
    }
}

const updateTask=async(req,res)=>{
    try{
        const { id: TaskId}=req.params
        const task= await Task.findOneAndUpdate({ _id : TaskId},req.body,{
            new:true,runValidators: true
        })
        if(!task){
            return res.status(404).json({msg: `NO task with id:${TaskId}`})
        }
        res.status(201).json({ task })
    }catch(error){
        res.status(500).json({  msg:error  })
    }
}
const deleteTask=async(req,res)=>{
    try{
        const { id: TaskId}=req.params
        const task= await Task.findOneAndDelete({ _id : TaskId})
        if(!task){
            return res.status(404).json({msg: `NO task with id:${TaskId}`})
        }
        res.status(201).json({ task })
    }catch(error){
        res.status(500).json({  msg:error  })
    }
}

module.exports={
    getAllTask,crateTask,getTask,updateTask,deleteTask
}