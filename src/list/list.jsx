import React from 'react';
import './list.pcss';

export default function ({data}) {
    const list = data ?
        data.map((item, index) => <li className="list__item" key={index}>{item}</li>) :
        null;
    return (
        <ul className="list">{list}</ul>
    )
}