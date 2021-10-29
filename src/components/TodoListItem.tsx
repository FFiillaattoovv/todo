import {FC} from "react";

export const TodoListItem: FC<TodoListItemPropsType> = ({label, important}) => {
    const color = important ? 'red' : 'black'
    const style = {color: `${color}`}

    return <span style={style}>{label}</span>
}

// types
type TodoListItemPropsType = {
    label: string
    important: boolean
}