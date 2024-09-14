import mongoose from 'mongoose';

const TodosSchema = new mongoose.Schema({
    task: String,
    status: String
})
module.exports = mongoose.model('todo', TodosSchema)

