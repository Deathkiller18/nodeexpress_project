const express=require('express');
const app=express();
const tasks=require('./routes/tasks')
const connectdb=require('./db/connect')

app.use(express.static('./public'))
app.use(express.json())

//routes 
// app.get('/hello',(req,res)=>{
//     res.send('Task Manger App')
// })

app.use('/api/v1/tasks',tasks)

const port =3000;

const start = async () => {
    try {
      await connectdb(process.env.MONGO_URI);
      app.listen(port, () =>
        console.log(`Server is listening on port ${port}...`)
      );
    } catch (error) {
      console.log(error);
    }
  };
 start()


