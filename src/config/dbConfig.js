import mongoose from 'mongoose';

 export const mongoConnect =  () => {

    try{
    
    // const conStr = "mongodb://localhost:27017/nottodolist";
    // const conStr = "mongodb+srv://notToDoList:abcdef12@cluster0.k4qvjoj.mongodb.net/nottodolist?retryWrites=true&w=majority"

    const conStr  = process.env.MONGO_CLIENT;
    const conn = mongoose.connect(conStr);
    conn && console.log("mongodb connected !!")

    }catch(error){
        console.log(error);
    }
    

};



