export default {
    //data
    state: {
        todos: [
            {
                id: 1,
                text: 'buy a car',
                checked: false
            },
            {
                id: 2,
                text: 'play soju',
                checked: false
            },
        ],

    },
    //데이터를 실질적으로 바꾸는곳은 여기서만, 데이터 바꾸는곳
    mutations: {

        ADD_TODO(state, value) {
            state.todos.push({
                id: Math.random(),
                text: value,
                checked: false
            })
        },
        TOGGLE_TODO(state, {id, checked}) {
            const index = state.todos.findIndex(todo => {

                return todo.id === id
            })
            state.todos[index].checked = checked
        },
        DELETE_TODO(state, todoId) {
            const index = state.todos.findIndex(todo => {
                return todo.id === todoId;
            })
            state.todos.splice(index, 1)
        }
    },
    //methods, 함수들어가는 곳, 비동기적 처리, EX 비동기로 서버에 DB업데이트하고 뮤테이션통해서 데이터 업데이트

    actions: {
        addTodo({commit}, value) {
            setTimeout(function () {
                commit('ADD_TODO',value)
            }, 2000)
        },
        toggleTodo({commit}, payload) {
            setTimeout(function () {
                commit('TOGGLE_TODO',payload)
            }, 2000)
        },
        deleteTodo({commit}, todoId) {
            setTimeout(function () {
                commit('DELETE_TODO',todoId)
            }, 2000)
        },
    },
    //computed랑 비슷
    getters: {
        numberOfCompletedTodo: state => {
            return state.todos.filter(todo => todo.checked).length
        }
    }
}