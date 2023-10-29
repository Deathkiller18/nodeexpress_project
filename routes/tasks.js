const express=require('express')
const router=express.Router()

const {getAllTask,crateTask,getTask,updateTask,deleteTask}=require('../controllers/tasks')

router.route('/').get(getAllTask).post(crateTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports=router