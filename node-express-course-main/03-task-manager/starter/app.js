  const express=require("express");
  const app=express();
  const tasks=require('./routes/tasks')

  const connectDB=require('./db/connect')

  require('dotenv').config()

 const notFound=require('./middleware/not-found')
 const errorHnadlerMiddleware=require('./middleware/error-handler')

  //middleware
  app.use(express.static('./public'))
 app.use(express.json())  

  //routes
     app.use('/api/v1/tasks',tasks)
   app.use(notFound);
   app.use(errorHnadlerMiddleware);

  //const port=5000;
 const port =process.env.PORT || 5000;
 

 const start=async()=>{
     try{
       await connectDB(process.env.MONGO_URI)
         app.listen(port,console.log(`server is listinig on port number ${port}`));
    
    } catch(error){
       console.log(error)
    }
};

start();

