<template>
    <div>
        
        <input type="text" placeholder="Author" v-model="state.newAuthor">
        <br>
        <input type="text" placeholder="Todo" v-model="state.newTodo">
        <br>
        <button @click="newTodo()">New Todo</button>
        <h1>All Todos</h1>
        <div v-for="item in state.todos" :key="item._id">
            <h4>
                Author: {{ item. author }}
            </h4>
            <h4>
                Todo: {{ item.todo }}
            </h4>
            <router-link :to="`/todo/${item._id}`">

            <button @click="editTodo(item._id)">Edit Todo</button>

        </router-link>
        <button @click="deleteTodo(item._id)">Delete Todo</button>

        </div>
        
    </div>
</template>
<script>
import { onMounted } from 'vue';
import crudtodo from"../modules/crudtodo.js";
export default {
    setup(){
        const { state, GetAllTodos, newTodo, deleteTodo,editTodo}=crudtodo()
        onMounted(()=>{GetAllTodos()})
        return {state,  GetAllTodos, newTodo, deleteTodo,editTodo}   
    },
    
}
</script>
<style lang="scss" scoped>
    h4{
        text-decoration: none;
    }
</style>