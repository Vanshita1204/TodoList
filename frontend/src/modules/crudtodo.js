
import { ref, computed } from 'vue';
import { useRoute, useRouter } from "vue-router";

const getTodos = () => {
    const route = useRoute();
    const router = useRouter();
    const todoId = computed(() => route.params.id)

    const state = ref({
        newTask: "",
        newStatus: "",
        todos: {}
    })
    const GetAllTodos = async () => {
        try {
            await fetch("http://localhost:3000/todos")
                .then(res => res.json())
                .then(data => {
                    state.value.todos = data
                })
                .then(
                    GetAllTodos()
                )

        }
        catch (error) {
            console.log(error)

        }
    }
    const newTodo = () => {
        const requestoptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                task: state.value.newTask,
                status: state.value.newStatus
            })
        }
        fetch("http://localhost:3000/todos/new", requestoptions)
            .then(
                GetAllTodos()
            )

    }
    const deleteTodo = (_id) => {
        fetch("http://localhost:3000/todos/delete/" + _id, { method: "DELETE" })
            .then(
                GetAllTodos()
            )
    }
    const editTodo = () => {
        const requestoptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                task: state.value.newTask,
                status: state.value.newStatus
            })
        }

        fetch("http://localhost:3000/todos/update/" + todoId.value, requestoptions)
            .then(res => res.body)
            .then(
                GetAllTodos()
            )
            .then(res => (console.log(res)))

        router.push('/todos')

    }
    const todo = ref({});
    const getSpecificTodo = async () => {
        try {
            fetch("http://localhost:3000/todos/")
                .then(res => res.json())
                .then(data => {
                    todo.value = data.filter(t => t._id === todoId.value)
                })
                .then(
                    GetAllTodos()
                )
        }
        catch (err) {
            console.log(err);
        }
    }

    return { todo, todoId, state, GetAllTodos, getSpecificTodo, newTodo, deleteTodo, editTodo }
}

export default getTodos