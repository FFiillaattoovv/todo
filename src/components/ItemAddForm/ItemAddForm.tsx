import {ChangeEvent, Component, FormEvent} from "react";
import "./ItemAddForm.css"

export class ItemAddForm extends Component<AddTodoListPropsType> {

    state = {
        label: ''
    }

    onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        this.props.onItemAdded(this.state.label)
        this.setState({
            label: ''
        })
    }

    onLabelChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            label: e.target.value
        })
    }

    render() {
        return (
            <form className="item-add-form d-flex" onSubmit={this.onSubmit}>
                <input type="text" className="form-control" placeholder="What needs to be done"
                       value={this.state.label}
                       onChange={this.onLabelChange}/>
                <button className="btn btn-outline-secondary">Add item</button>
            </form>
        )
    }
}

// types
type AddTodoListPropsType = {
    onItemAdded: (text: string) => void
}