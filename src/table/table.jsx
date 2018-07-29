import React from 'react';
import './table.pcss';

export default function({header, data, className}) {

    const tableHeader = header ? <thead>
        <tr>{header.map((item, index) => <th key={index}>{item}</th>)}</tr>
    </thead> : null;

    const body = data ? <tbody>{data.map((row, rowIndex) =>
        <tr key={rowIndex}>
            {row.map((item, index) => <td key={index}>{item}</td>)}
        </tr>)}
    </tbody> : null;

    return (
        <div className={className}>
        <table>
            {tableHeader}
            {body}
        </table>
        </div>
    )
}
