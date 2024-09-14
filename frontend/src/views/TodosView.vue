<template>
    <div>
        
        <input type="text" placeholder="Task" v-model="state.newTask">
        <br>
        <input type="text" placeholder="Status" v-model="state.newStatus">
        <br>
        <button @click="newTodo()">New Todo</button>
        <h1>All Todos</h1>
        <div v-for="item in state.todos" :key="item._id">
            <h4>
                Task: {{ item.task }}
            </h4>
            <h4>
                Status: {{ item.status }}
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