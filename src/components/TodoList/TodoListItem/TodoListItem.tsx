import {CSSProperties, FC} from "react";
import "./TodoListItem.css"

export const TodoListItem: FC<TodoListItemPropsType> = ({label, important = false}) => {
    const style: CSSProperties = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    }

    return (
        <span className="todo-list-item">
            <span style={style} className="todo-list-item-label">
                {label}
            </span>

            <button type="button" className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-exclamation"/>
            </button>

            <button type="button" className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o"/>
            </button>
        </span>
    )
}

// types
type TodoListItemPropsType = {
    label: string
    important: boolean
}