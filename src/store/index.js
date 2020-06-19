import {
    observable,
    action,
    computed
} from 'mobx'
import moment from 'moment'


class AppStore {
    @observable time = ''
    @observable todos = []
    @computed get desc() {
        return `${this.time} 您已经查看了 ${this.todos.length} 次时间`
    }
    @action addTodo(todo) {
        this.todos.push(todo)
    }
    @action deleteTodo() {
        this.todos.pop()
    }
    @action resetTodo() {
        this.todos = []
    }
    @action getNow() {
        this.time = moment().format('YYYY-MM-DD HH:mm:ss')
    }
}


const store = new AppStore()

setInterval(()=>{
    store.getNow()
}, 1000)

export default store
