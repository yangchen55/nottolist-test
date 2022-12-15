import TaskSchema from './TaskSchema.js'

// insert 
export const insertTask = taskObj  => {
    return TaskSchema(taskObj).save()

}
// read 
export const getTasks = ()  => {
    return TaskSchema.find();
}
 

// update 

export const updateTask = (_id, obj) => {
    return TaskSchema.findByIdAndUpdate(_id, obj, {new: true});

}

// delete 
export const deleteTasks= (_idsArg) => {
    return TaskSchema.deleteMany({
        _id: {$in : _idsArg},
    } );

}