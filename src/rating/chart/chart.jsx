import React from 'react';
import './chart.pcss';

export default function({data}) {
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
    let end = 0;

    function addSmallPiece (startPosition, size, index, partNumber) {
        return (
            <div className={"piece"}
                 key={partNumber ? (index + partNumber * 100) : index}
                 id={partNumber ? (index + partNumber * 100) : index}
                 style={{
                     position: 'absolute',
                     width: '200px',
                     height: '200px',
                     clip: 'rect(0px, 200px, 200px, 100px)',
                     animation: 'bake-pie 1s',
                     transform: 'rotate(' + (startPosition) + 'deg) translate3d(0,0,0)'}}>
            <span style={{
                display: 'block',
                position: 'absolute',
                top: '0',
                left: '0',
                borderRadius: '50%',
                width: '200px',
                height: '200px',
                clip: 'rect(0px, 200px, 200px, 100px)',
                transform: 'rotate(' + (size - 180) + 'deg) translate3d(0,0,0)',
                backgroundColor: colors[index]
            }}/>
            </div>)
    }

    const pieces = data ? data.map((item, index) => {
        const size = item.percent * 3.6;
        end = end + size;
        if (size < 180) {
            return addSmallPiece(end-size, size, index, null)
        } else {
            const pieces = [];
            pieces.push(addSmallPiece(end-size, 180, index, 1));
            pieces.push(addSmallPiece(end-size+180, size-180, index, 2));
            return (<div id={index}>
                {pieces}
            </div>)
        }
    }) : null;

    return (
        <div className="pie-chart">
            {pieces}
        </div>
    )
}