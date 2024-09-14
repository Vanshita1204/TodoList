import express from 'express';
import Todo from '../models/Todos'
const router = express.Router()

// Get all Todo Route
router.get('/', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
})

//create new todo
router.post('/new', async (req, res) => {
    const newTodos = new Todo(
        req.body
    );
    const savedTodo = await newTodos.save();
    res.json(savedTodo)
})

// getter by id
router.get('/get/:id', async (req, res) => {
    const todos = await Todo.findById({ _id: req.params.id })
    res.json(todos)
})

//delete by id

router.delete('/delete/:id', async (req, res) => {
    const todo = await Todo.findByIdAndDelete({ _id: req.params.id })
    res.json(todo)
})

router.put('/update/:id', async (req, res) => {
    const todo = await Todo.updateOne(
        { _id: req.params.id }, { $set: req.body }
    )
    res.json(todo)
})

module.exports = router 