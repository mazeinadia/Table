import React from 'react';

export default function ({data}) {

    const list = data ? data.map(item =>
            <div className="tab" onClick={item.link}>{item.name}</div>)
        : null;
    return (
        <div className="tabs">
            {list}
        </div>
    )
}