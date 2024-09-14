<template>
    <div>
        <h1>Editing a Todo</h1>
        <hr>
        <div v-for="item in todo" :key="item._id">
            <h4>{{item.status}}</h4>
            <h4>{{item.task}}</h4>
        </div>
        <input type="text" placeholder="task" v-model="state.newTask">
        <span>Test: {{ state.newTask }}  </span>
        <br>
        <input type="text" placeholder="status" v-model="state.newStatus">
        <span>Test: {{ state.newStatus }}  </span>
        <br>
        <br>
        <button @click="editTodo()">Update Item</button>
        <hr>    
    </div>
</template>

<script>
import crudtodo from"../modules/crudtodo.js";
export default {
    setup(){
        const { editTodo, state, todo, todoId,getSpecificTodo }=crudtodo();
        getSpecificTodo()
        return{
            editTodo, state, todo, todoId, getSpecificTodo
        }

    }

    
}
</script>

<style lang="scss">
    
</style>