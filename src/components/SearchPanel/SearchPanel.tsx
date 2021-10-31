import "./SearchPanel.css"
import {ChangeEvent, Component} from "react";

export class SearchPanel extends Component<SearchPanelPropsType> {

    state = {
        term: ''
    }

    onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value
        this.setState({term})
        this.props.onSearchChange(term)
    }

    render() {
        return <input type='text' placeholder='search' className="form-control search-input"
                      onChange={this.onSearchChange}
                      value={this.state.term}/>
    }
}

type SearchPanelPropsType = {
    onSearchChange: (term: string) => void
}