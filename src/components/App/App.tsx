import {SearchPanel} from "../SearchPanel/SearchPanel";
import {AppHeader} from "../AppHeader/AppHeader";
import {ItemStatusFilter} from "../ItemStatusFilter/ItemStatusFilter";
import {TodoList} from "../TodoList/TodoList";
import "./App.css"
import {Component} from "react";
import {ItemAddForm} from "../ItemAddForm/ItemAddForm";

export class App extends Component<{}, AppStateType> {

    maxId = 100

    state = {
        todos: [
            this.createTodoItem('Learn Redux'),
            this.createTodoItem('Listen to the podcast'),
            this.createTodoItem('Take a walk'),
        ],
        term: '',
        filter: 'all' as const
    }

    createTodoItem(label: string) {
        return {
            id: this.maxId++,
            label,
            done: false,
            important: false
        }
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

    addItem = (text: string) => {
        const newItem = this.createTodoItem(text)

        this.setState(({todos}) => {
            const newArray = [
                ...todos, newItem
            ]

            return {
                todos: newArray
            }
        })
    }

    toggleProperty(arr: TodosType, id: number, propName: keyof TodoType) {
        const index = arr.findIndex(todo => todo.id === id)
        const oldTodo = arr[index]
        const newTodo = {
            ...oldTodo,
            [propName]: !oldTodo?.[propName]
        }
        const newArray = [
            ...arr.slice(0, index),
            newTodo,
            ...arr.slice(index + 1)
        ]

        return {
            todos: newArray
        }
    }

    onToggleImportant = (id: number) => {
        this.setState(({todos}) => this.toggleProperty(todos, id, "important"))
    }

    onToggleDone = (id: number) => {
        this.setState(({todos}) => this.toggleProperty(todos, id, "done"))
    }

    search(todos: TodosType, term: string) {
        if (term === '') return todos

        return todos.filter(todo => {
            return todo.label.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }

    filter(todos: TodosType, filter: FilterType) {
        switch (filter) {
            case "active":
                return todos.filter(todo => !todo.done)
            case "done":
                return todos.filter(todo => todo.done)
            default:
                return todos
        }
    }

    onSearchChange = (term: string) => {
        this.setState({term})
    }

    onFilterChange = (filter: FilterType) => {
        this.setState({filter})
    }

    render() {
        const {todos, term, filter} = this.state
        const doneCount = todos.filter(todo => todo.done).length
        const todoCount = todos.length - doneCount
        const visibleTodos = this.filter(this.search(todos, term), filter)

        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChange={this.onSearchChange}/>
                    <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange}/>
                </div>
                <TodoList todos={visibleTodos} onDeleted={this.deleteItem} onToggleDone={this.onToggleDone}
                          onToggleImportant={this.onToggleImportant}/>
                <ItemAddForm onItemAdded={this.addItem}/>
            </div>
        )
    }
}


// types
export type TodoType = {
    id: number
    label: string
    done: boolean
    important: boolean
}
export type TodosType = Array<TodoType>
export type FilterType = 'all' | 'active' | 'done'
type AppStateType = {
    todos: TodosType,
    term: string,
    filter: FilterType
}



