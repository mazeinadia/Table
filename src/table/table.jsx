import React from 'react';

export default function({header, data, changeFilter}) {

    const tableHeader = header ? <thead>
        <tr>{header.map((item, index) => <th key={index}>{item}</th>)}</tr>
    </thead> : null;

    const body = data ? <tbody>{data.map((row, rowIndex) =>
        <tr key={rowIndex}>
            {row.map((item, index) => <td key={index}>{item}</td>)}
        </tr>)}
    </tbody> : null;

    const change = (value) => {
        if (changeFilter) {
            changeFilter(value);
        }
    };

    return (
        <div>
            <span>Поиск по проектам:</span>
            <input type="text" onChange={(ev) => change(ev.target.value)} placeholder="Введите название проекта"/>
        <table>
            {tableHeader}
            {body}
        </table>
        </div>
    )
}
