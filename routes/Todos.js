const express= require("express");
const router=express.Router()
const Todo= require('../models/Todos');

// Get all Todo Route
router.get('/',async(req,res)=> {
    const todos= await Todo.find();
    res.json(todos);
})

//create new todo
router.post('/new',async(req,res) =>{
    const newTodos= new Todo(
        req.body
        // {
        //     author:"Flanders",
        //     todo: "Go to canada"
        // }
    );
    const savedTodo=await newTodos.save();
    res.json(savedTodo)    
})

// getter by id
router.get('/get/:id',async(req,res) =>{
    const todos= await Todo.findById({_id: req.params.id})
    res.json(todos)    
})

//delete by id

router.delete('/delete/:id',async(req,res)=>{
    const todo= await Todo.findByIdAndDelete({_id: req.params.id})
    res.json(todo)
})

router.put('/update/:id',async(req,res)=>{
    const todo=await Todo.updateOne(
        {_id: req.params.id},{$set: req.body}
        // {
        //     author:"Flanderss",
        //     todo: "Go to canada"
        // }
    )
    res.json(todo)
})

module.exports = router 