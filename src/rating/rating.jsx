import React from 'react';

export default function ({data}) {
    const list = data ?
        <ul>{data.map((item, index) =>
            <li key={index}>{item.name} - {item.rate} - {item.percent}</li>)}</ul>
        : null;
    return (
        <div>{list}</div>
    )
}