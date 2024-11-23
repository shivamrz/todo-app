const mongoose=require("mongoose");
// mongodb+srv://Derek:Derek18%40@cluster0.q6xhn.mongodb.net/
mongoose.connect("mongodb+srv://Derek:Derek18%40@cluster0.q6xhn.mongodb.net/todos");

const todoSchema=mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo=mongoose.model('todos',todoSchema);

module.exports={
    todo
}