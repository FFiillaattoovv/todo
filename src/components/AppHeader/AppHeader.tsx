import {FC} from "react";
import "./AppHeader.css"

export const AppHeader: FC<AppHeaderPropsType> = ({toDo, done}) => {
    return (
        <div className="app-header d-flex">
            <h1>Todolist</h1>
            <h2>{toDo} more to do, {done} done</h2>
        </div>
    )
}

// types
type AppHeaderPropsType = {
    toDo: number
    done: number
}