import {FC} from "react";
import {TodoListItem} from "./TodoListItem/TodoListItem";
import "./TodoList.css";
import {TodosPropsType, TodoType} from "../App/App";

export const TodoList: FC<TodosPropsType> = ({todos}) => {

    const elements = todos.map((todo: TodoType) => {
        const {id, ...todoProps} = todo
        return (
            <li key={id} className="list-group-item">
                <TodoListItem {...todoProps}/>
            </li>
        )
    })

    return (
        <ul className="list-group todo-list">{elements}</ul>
    )
}