import {FC} from "react";
import {TodosPropsType, TodoType} from "../index";
import {TodoListItem} from "./TodoListItem";

export const TodoList: FC<TodosPropsType> = ({todos}) => {

    const elements = todos.map((todo: TodoType) => {
        const {id, ...todoProps} = todo
        return (
            <li key={id}>
                <TodoListItem {...todoProps}/>
            </li>
        )
    })

    return (
        <ul>{elements}</ul>
    )
}