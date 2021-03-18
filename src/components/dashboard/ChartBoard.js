//import React,{ useEffect, useState } from 'react';
import './dashboard.css';

const ChartBoard = ({headerText, childToParent, renderData, api}) => {

    function renderStatsObject(){
        if (renderData) {
            return Object.entries(renderData.stats).map(([key, val], i) => {
                return (
                    <div key={key}>
                        <div className="heading">
                            <span>
                                {val.label}
                            </span>
                            <span>
                                {val.value}%
                            </span>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" style={{width:`${val.value}%`}}></div>
                        </div>
                    </div>
                )
            })
        }
	}

    return (
        <div>
            <div className="widget-header widget-container">
                <div style={{width: '65%'}}>
                    <h3>{headerText}</h3>
                </div>
                <div style={{width: '35%'}}>
                <select name="sort-option" className="sort-option">
                    <option value="label" selected="">Sort by Label</option>
                    <option value="value">Sort by Value</option>
                </select>
                <span className="header-icon" onClick = {()=>childToParent(headerText)}>
                    <i className="fa fa-arrows-alt"></i>
                </span>
                </div>
                
            </div>
            <div className="highlight-container">
                <div style={{width: '35%'}}>
                    <div className="highlight-left-container info-style">
                        <div>
                            <h4>STATS:</h4>
                        </div>
                        <div className="info-module">
                            {renderStatsObject()}
                        </div>
                        <div className="view-api">
                            <a rel="noreferrer" href={'http://13.232.99.42:80/'+api} target="_blank">
                                <span>View API</span>
                                <span className="fa fa-arrow-right fa-lg"></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{width: '65%'}}>
                    <div className="highlight-left-container chart-style">
                        <div className="highlight-container control-style">
                            <div className="control-style-one">
                                <span>{renderData && renderData.filter.label}</span>
                            </div>
                            <div className="control-style-two">
                                {renderData && renderData.filter.value}%
                            </div>
                        </div>
                        <div className="canvas-container">
                            <div className="canvas" id="highlights">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>{renderData && renderData.dataSet.header[0]}</th>
                                            <th>{renderData && renderData.dataSet.header[1]}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <div>
                                            {
                                            renderData && renderData.dataSet.data.map((val, index) =>
                                            <tr key={index} style={{color: `${val.color}`}}>
                                                    <td>{val.label}</td>
                                                    <td>{val.value}</td>
                                                </tr>
                                            )
                                            }
                                        </div>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChartBoard;