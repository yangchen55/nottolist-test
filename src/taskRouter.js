import express from "express";
import morgan from "morgan";
import { deleteTasks, getTasks, insertTask, updateTask } from "./models/task/TaskModel.js";

const router = express.Router();
 


//middleware
router.use(morgan("dev"));

// api endpoints

// workflow : CRUD
// C(create) => receive newtaskand store in the database
router.post("/", async (req, res) => {

  try{
    console.log(req.body);
   const result =  await insertTask(req.body);
   console.log(result); 
   res.json({ 
    status : 'success',
    message: "task added sucessfully",
   
    });

  }catch(error){
    console.log("hour limit exceeds");
    res.status(400).json({ 
      status : 'error',
      message: error.message,
      
  
  });
  next(error);

  }
  
});

// // R(Read) => read data from data base and return to the client
router.get("/", async(req, res) => {

  const data =  await getTasks();
  res.json({
    status: 'wait',
    message: "here are available list", 
    data,
  })
 
});

// // U(Update) => update some information of existing data int he database and respond client accordingly
router.put("/", async(req, res) => {

 const {_id, type} = req.body;
//  console.log("taskrou",req.body);

 

  const result = await updateTask(_id, {type});
  console.log(result);

  if(result?._id){
    res.json({ message: "data has been updated", status: "success" });

  }else{
    res.json({ message: "data not found", status: "success" });


  }
   

});

// //D(Delete) => Delete data(s) from database and response client accordingly
router.delete("/", async (req, res) => {
    const result = await deleteTasks(req.body);
    // console.log("task router delte",result);

  if(result?.deletedCount){
  res.json({ 
    status : 'success',
    message: "the task is deleted" ,
  

});
    }else{
      res.json({ 
        status : 'failed',
        message: "no data is deleted" ,
      
    
    });

    }

});

export default router;