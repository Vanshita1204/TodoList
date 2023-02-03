<template>
    <div>
        <h1>Editing a Todo</h1>
        <hr>
        <div v-for="item in todo" :key="item._id">
            <h4>{{item.author}}</h4>
            <h4>{{item.todo}}</h4>
        </div>
        <input type="text" placeholder="Author" v-model="state.newAuthor">
        <span>Test: {{ state.newAuthor }}  </span>
        <br>
        <input type="text" placeholder="Todo" v-model="state.newTodo">
        <span>Test: {{ state.newTodo }}  </span>
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