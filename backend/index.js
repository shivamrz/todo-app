const express=require("express");
const { createTodo, updateTodo } = require("./type");
const {todo}=require("./db")
const app=express();
const cors=require("cors");

app.use(express.json());
app.use(cors());


app.post("/todo", async function(req,res){
    const createPayLoad=req.body;
    const parsedpayLoad=createTodo.safeParse(createPayLoad);
    if(!parsedpayLoad.success){
        res.status(411).json({
            msg: "You sent the worng inputs"
        })
        return;
    }
    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed:false
    })

    res.json({
        msg:"Todo Created"
    })
})

app.get("/todos",async function(req, res){
    const todos= await todo.find({});
    res.json({
        todos
    })
})

app.put("/completed", async function(req, res){
    const updatePayLoad=req.body;
    const parsedpayLoad=updateTodo.safeParse(updatePayLoad);
    if(!parsedpayLoad.success){
        res.status(411).json({
            msg:" You have given the wrong inputs"
        })
        return;
    }
    await todo.update({
        _id: req.body.id
    },{
        completed:true
    })
    res.json({
        msg:"Todo mark as completed"
    })
})

app.listen(3000)