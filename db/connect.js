const mongoose=require('mongoose')

const connectionstring='mongodb+srv://dpvarient2211:Dhruvpatel22@atlascluster.wn5ewhq.mongodb.net/?retryWrites=true&w=majority'

const connectdb=()=>{
    return mongoose.connect(connectionstring,{
        useNewUrlParser:true,
        useCreateIndex:true,
        useFindAndModify:false,
        useUnifiedTopology:true,})
}

module.exports=connectdb 

// }).then(()=>console.log('connect the db...')).catch(err=>console.log(err))