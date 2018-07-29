import React from 'react';
import Filter from '../filter/filter.jsx';
import Table from '../table/table.jsx';
import List from '../list/list.jsx';
import { connect } from "react-redux";
import { uniqueProjects, methodRating, fetch, filterTable } from "./actions/app";
import Rating from '../rating/rating.jsx';
import './app.pcss';

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
        const dispatch = this.props.dispatch;

        dispatch(fetch());
        dispatch(uniqueProjects());
        dispatch(methodRating());
    }

    render() {
        const {
            tableHeader,
            tableData,
            onTableFilterChange,
            projects,
            rating
        } = this.props;
        return (
            <div className="">
                <h2>Транзакции</h2>
                <Filter changeValue={onTableFilterChange}/>
                <Table header={tableHeader}
                       data={tableData} className="transactions"/>
                <h2>Проекты</h2>
                <List data={projects}/>
                <h2>Рейтинг платежных систем</h2>
                <Rating data={rating}/>
            </div>
        )
    }
}