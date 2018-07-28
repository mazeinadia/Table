import React from 'react';
import Table from '../table/table.jsx';
import List from '../list/list.jsx';
import {connect} from "react-redux";
import getProjects from "../list/action/list";
import {fetch} from "../table/actions/table";
import getRating from '../rating/actions/rating';
import Rating from '../rating/rating.jsx';
import tableFilterChange from '../table/actions/filter'

@connect(state => {
    return {
        projects: state.projects,
        tableHeader: state.tableHeader,
        tableData: state.tableData,
        rating: state.rating
    };
}, dispatch => {
    return {
        dispatch,
        onTableFilterChange: (value) => {
            dispatch(tableFilterChange(value))
        }
    }
})
export default class extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(fetch());
        this.props.dispatch(getProjects());
        this.props.dispatch(getRating());
    }

    render() {

        return (
            <div className="">
                <Table header={this.props.tableHeader}
                       data={this.props.tableData}
                       сhangeFilter={this.props.onTableFilterChange}/>
                <List data={this.props.projects}/>
                <Rating data={this.props.rating}/>
            </div>
        )
    }
}