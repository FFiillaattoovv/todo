import ReactDOM from 'react-dom'
import {SearchPanel} from "./components/SearchPanel";
import {AppHeader} from "./components/AppHeader";
import {TodoList} from "./components/TodoList";

const App = () => {

    const todos: TodosType = [
        {id: 1, label: 'Learn Redux', important: true},
        {id: 2, label: 'Listen to the podcast', important: false},
        {id: 3, label: 'Drink Coffee', important: false},
    ]

    return (
        <div>
            <AppHeader/>
            <SearchPanel/>
            <TodoList todos={todos}/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))

// types
export type TodoType = {
    id: number
    label: string
    important: boolean
}
export type TodosType = Array<TodoType>
export type TodosPropsType = {
    todos: TodosType
}

