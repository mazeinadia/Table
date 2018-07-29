import React from 'react';
import './transactions.pcss';
import Filter from '../filter/filter.jsx';
import Table from '../table/table.jsx';

export default function ({header, data, onTableFilterChange}) {
    return (
        <div>
            <Filter key="filter" changeValue={onTableFilterChange}/>
            <Table key="table" header={header}
                   data={data} className="transactions"/>
        </div>
    )
}