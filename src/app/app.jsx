import React from 'react';
import Table from '../table/table.jsx';
import List from '../list/list.jsx';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { uniqueProjects, methodRating, fetch, filterTable } from "./actions/app";

import Rating from '../rating/rating.jsx';

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
            dispatch(filterTable(value))
        }
    }
})
export default class extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(fetch());
        this.props.dispatch(uniqueProjects());
        this.props.dispatch(methodRating());
    }

    render() {
        return (
            <div className="">
                <Table header={this.props.tableHeader}
                       data={this.props.tableData}
                       changeFilter={this.props.onTableFilterChange}/>
                <List data={this.props.projects}/>
                <Rating data={this.props.rating}/>
            </div>
        )
    }
}