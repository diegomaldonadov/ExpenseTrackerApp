import React from "react";

import './ChartBar.css';

const ChartBar = (props) => {
    let barFillHeight = '0%';
    const formattedAmount = props.value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
      });

    if (props.maxValue > 0) {
        barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
    }
    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div
                    className='chart-bar__fill'
                    style={{ height: barFillHeight }}
                ></div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>
            <div className='chart-bar__amount'>{formattedAmount == '$0.00' ? ' ' : formattedAmount}</div>
        </div>
    );
};

export default ChartBar;