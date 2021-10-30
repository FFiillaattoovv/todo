import {SearchPanel} from "../SearchPanel/SearchPanel";
import {AppHeader} from "../AppHeader/AppHeader";
import {ItemStatusFilter} from "../ItemStatusFilter/ItemStatusFilter";
import {TodoList} from "../TodoList/TodoList";
import "./App.css"
import {Component} from "react";

export class App extends Component<{}, AppStateType> {

    state = {
        todos: [
            {id: 1, label: 'Learn Redux', important: true},
            {id: 2, label: 'Listen to the podcast', important: false},
            {id: 3, label: 'Drink Coffee', important: false},
        ]
    }

    deleteItem = (id: number) => {
        this.setState(({todos}) => {
            const index = todos.findIndex(todo => todo.id === id)
            const newArray = [
                ...todos.slice(0, index),
                ...todos.slice(index + 1)
            ]

            return {
                todos: newArray
            }
        })
    }

    render() {

        return (
            <div className="todo-app">
                <AppHeader done={1} toDo={2}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>
                <TodoList todos={this.state.todos} onDeleted={this.deleteItem}/>
            </div>
        )
    }
}


// types
type AppStateType = {
    todos: TodosType
}
export type TodoType = {
    id: number
    label: string
    important: boolean
}
export type TodosType = Array<TodoType>

