import {SearchPanel} from "../SearchPanel/SearchPanel";
import {AppHeader} from "../AppHeader/AppHeader";
import {ItemStatusFilter} from "../ItemStatusFilter/ItemStatusFilter";
import {TodoList} from "../TodoList/TodoList";
import "./App.css"

export const App = () => {

    const todos: TodosType = [
        {id: 1, label: 'Learn Redux', important: true},
        {id: 2, label: 'Listen to the podcast', important: false},
        {id: 3, label: 'Drink Coffee', important: false},
    ]

    return (
        <div className="todo-app">
            <AppHeader done={1} toDo={2}/>
            <div className="top-panel d-flex">
                <SearchPanel/>
                <ItemStatusFilter/>
            </div>
            <TodoList todos={todos}/>
        </div>
    )
}


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

