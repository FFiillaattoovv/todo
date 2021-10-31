import {FC} from "react";
import "./ItemAddForm.css"

export const ItemAddForm: FC<AddTodoListPropsType> = ({onItemAdded}) => {
    const onClickHandler = () => {
        onItemAdded()
    }
    return (
        <div className="item-add-form">
            <button className="btn btn-outline-secondary" onClick={onClickHandler}>Add item</button>
        </div>
    )
}

// types
type AddTodoListPropsType = {
    onItemAdded: () => void
}