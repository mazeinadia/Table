import React from 'react';
import './filter.pcss';

export default function({changeValue}) {

    const change = (value) => {
        if (changeValue) {
            changeValue(value);
        }
    };

    return (
        <div className="search">
            <span>Поиск по проектам:</span>
            <input type="text" onChange={(ev) => change(ev.target.value)} placeholder="Введите название проекта" autoFocus/>
        </div>
    )
}