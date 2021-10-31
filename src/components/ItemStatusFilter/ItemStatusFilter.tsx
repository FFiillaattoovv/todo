import {Component} from "react";
import {FilterType} from "../App/App";

export class ItemStatusFilter extends Component<ItemStatusFilterPropsType> {

    buttons: ButtonsType = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ]

    render() {

        const buttons = this.buttons.map(({name, label}) => {
            const isActive = this.props.filter === name
            const classNames = isActive ? 'btn-info' : 'btn-outline-secondary'

            return (
                <button type="button"
                        key={name}
                        className={`btn ${classNames}`}
                        onClick={() => this.props.onFilterChange(name)}>{label}
                </button>
            )
        })

        return (
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}

// types
type ItemStatusFilterPropsType = {
    filter: FilterType
    onFilterChange: (filter: FilterType) => void
}
type ButtonsType = Array<{ name: FilterType, label: string }>
