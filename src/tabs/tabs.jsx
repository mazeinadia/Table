import React from 'react';
import './tabs.pcss';

export default function ({data, chooseContent}) {
;
    function choose(value) {
        console.log(value);
        return chooseContent ? chooseContent(value) : null
    }

    const list = data ? data.map((item, index) => {
        console.log(item.value);
        return <div key={index} className="tab" onClick={() => choose(item.value)}>{item.name}</div>})
        : null;
    return (
        <div className="tabs">
            {list}
        </div>
    )
}