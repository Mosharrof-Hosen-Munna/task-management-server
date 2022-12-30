const {Schema,model} = require("mongoose")

const taskSchema = new Schema({
    title: {
        type: String,
        default: "Untitled"
    },
    description: {
        type: String,
        default: "No description for this task"
    },
    img: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_6mO1a496PTeIRBhAUGjkfGzeEEMiIzz2g&usqp=CAU"
    },
    status: {
        type: String,
        enum: ["complete", "incomplete"],
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

const Task = model('Task',taskSchema)

module.exports = Task