import mongoose from 'mongoose';

const mongoConnect = async () => {

    try{

    const conStr  = 'mongodb://localhost:27017/Tasktest'
    const con = await mongoose.connect(conStr);
    con && console.log("mongodb connected !!")

    }catch(error){
        console.log(error);
    }
    

};
export default mongoConnect;