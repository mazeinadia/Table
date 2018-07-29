import React from 'react';
import Chart from './chart/chart.jsx';
import './rating.pcss';

export default function ({data}) {

    const colors = [
        'rgba(0,255,255, 0.2)',
        'rgba(255,127,80,0.2)',
        'rgba(124,252,0,0.2)',
        'rgba(128,0,128,0.2)',
        'rgba(255,255,0,0.2)',
        'rgba(46,139,87,0.2)',
        'rgba(238,130,238,0.2)',
        'rgba(255,165,0,0.2)',
    ];

    const brightColors = [
        'rgb(0,255,255)',
        'rgb(255,127,80)',
        'rgb(124,252,0)',
        'rgb(128,0,128)',
        'rgb(255,255,0)',
        'rgb(46,139,87)',
        'rgb(238,130,238)',
        'rgb(255,165,0)'
    ];

    const highlight = (index) => {
        //document.getElementById(index) document.getElementById(index).style.backgroundColor = brightColors[index];
    };
    const cancelHighlight = (index) => {
        //document.getElementById(index).style.backgroundColor = colors[index];
    };

    const list = data ?
        <table className="rating__list">
            <thead>
            <tr>
                <th>Платежная система</th>
                <th>Количество платежей</th>
                <th>В процентах</th>
            </tr>
            </thead>
            <tbody>{data.map((item, index) =>
            <tr key={index}
                style={{backgroundColor: colors[index]}}
            onMouseEnter={highlight(index)}
            onMouseLeave={cancelHighlight(index)}>
                <td>{item.name}</td>
                <td>{item.rate}</td>
                <td>{item.percent}</td>
            </tr>)}
        </tbody></table>
        : null;
    return (
        <div className="rating">
            <Chart data={data}/>
            {list}
         </div>
    )
}