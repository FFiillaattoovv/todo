import {FC} from "react";
import {TodoListItem} from "./TodoListItem/TodoListItem";
import "./TodoList.css";
import {TodosType, TodoType} from "../App/App";

export const TodoList: FC<TodoListPropsType> = ({todos, onDeleted, onToggleDone, onToggleImportant}) => {

    const elements = todos.map((todo: TodoType) => {
        const {id, ...todoProps} = todo

        return (
            <li key={id} className="list-group-item">
                <TodoListItem {...todoProps} onDeleted={() => onDeleted(id)} onToggleDone={() => onToggleDone(id)}
                              onToggleImportant={() => onToggleImportant(id)}/>
            </li>
        )
    })

    return (
        <ul className="list-group todo-list">{elements}</ul>
    )
}

//types
type TodoListPropsType = {
    todos: TodosType
    onDeleted: (id: number) => void
    onToggleDone: (id: number) => void
    onToggleImportant: (id: number) => void
}