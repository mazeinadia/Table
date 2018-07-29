import React from 'react';
import List from '../list/list.jsx';
import { connect } from "react-redux";
import { uniqueProjects, methodRating, fetch, filterTable, showContent } from "./actions/app";
import Rating from '../rating/rating.jsx';
import Tabs from '../tabs/tabs.jsx';
import Transactions from '../transactions/transactions.jsx';
import './app.pcss';

@connect(state => {
    return {
        projects: state.projects,
        tableHeader: state.tableHeader,
        tableData: state.tableData,
        rating: state.rating,
        tabs: state.tabs,
        content: state.content
    };
}, dispatch => {
    return {
        dispatch,
        onTableFilterChange: (value) => {
            dispatch(filterTable(value))
        },
        onContentChoose: (value) => {
            dispatch(showContent(value))
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
        console.log('app rendered');
        const {
            tableHeader,
            tableData,
            onTableFilterChange,
            onContentChoose,
            projects,
            rating,
            tabs,
            content
        } = this.props;

        console.log(content);
        let showed = [];
        switch (content) {
            case 'projects':
                showed = [
                    <h2 key="h21">Проекты</h2>,
                    <List key="list" data={projects}/>
                ];
                break;
            case 'payments':
                showed = [
                    <h2 key="h22">Рейтинг платежных систем</h2>,
                    <Rating key="rating" data={rating}/>
                ];
                break;
            default :
                showed =[
                    <h2 key="h23">Транзакции</h2>,
                    <Transactions key="transactions" onTableFilterChange={onTableFilterChange}
                                  header={tableHeader}
                           data={tableData} className="transactions"/>
                ];
        }

        return (
            <div className="">
                <Tabs data={tabs} chooseContent={onContentChoose}/>
                {showed}
            </div>
        )
    }
}