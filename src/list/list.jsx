import React from 'react';

export default function ({data}) {
    const list = data ?
        <ul>{data.map((item, index) => <li key={index}>{item}</li>)}</ul>
    : null;
    return (
        <div>{list}</div>
    )
}