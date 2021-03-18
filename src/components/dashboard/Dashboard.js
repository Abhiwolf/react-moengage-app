import React,{ useEffect, useState } from 'react';
import './dashboard.css';
import ChartBoard from './ChartBoard';

const Dashboard = () => {
    const [initialHighlight, setUpdateHighlight] = useState(null);
    const [initialBuyer, setUpdateBuyer] = useState(null);
    const [initialIncome, setUpdateIncome] = useState(null);
    const [initialCountry, setUpdateCountry] = useState(null);

    const [highlight, setHighlight] = useState(true);
    const [buyer, setBuyer] = useState(true);
    const [income, setIncome] = useState(true);
    const [country, setCountry] = useState(true);

    const [minMaxClick, updateminMaxClick] = useState(false);

    useEffect(() => {
        fetch(
            'http://13.232.99.42:80/get_highlight', { mode: 'cors' }
        )
          .then(res => res.json())
          .then(response => {
                console.log(response.data);
                setUpdateHighlight(response.data);
          })
          .catch(error => console.log(error));

        fetch(
            'http://13.232.99.42:80/get_buyer', { mode: 'cors' }
        )
          .then(res => res.json())
          .then(response => {
                console.log(response.data);
                setUpdateBuyer(response.data);
          })
          .catch(error => console.log(error));

          fetch(
            'http://13.232.99.42:80/get_income', { mode: 'cors' }
        )
          .then(res => res.json())
          .then(response => {
                console.log(response.data);
                setUpdateIncome(response.data);
          })
          .catch(error => console.log(error));

          fetch(
            'http://13.232.99.42:80/get_country', { mode: 'cors' }
        )
          .then(res => res.json())
          .then(response => {
                console.log(response.data);
                setUpdateCountry(response.data);
          })
          .catch(error => console.log(error));
      }, []);
    
      function childToParent (headerText) {
          if (headerText === 'Highlights') {
            if(!minMaxClick){
              setBuyer(false);
              setIncome(false);
              setCountry(false);
              updateminMaxClick(true);
            } else {
              setBuyer(true);
              setIncome(true);
              setCountry(true);
              updateminMaxClick(false);
            }
            
          } else if(headerText === 'Buyers'){
            if(!minMaxClick){
              setHighlight(false);
              setIncome(false);
              setCountry(false);
              updateminMaxClick(true);
            } else {
              setHighlight(true);
              setIncome(true);
              setCountry(true);
              updateminMaxClick(false);
            }
            
          } else if(headerText === 'Countries'){
            if(!minMaxClick){
              setHighlight(false);
              setBuyer(false);
              setIncome(false);
              updateminMaxClick(true);
            } else {
              setHighlight(true);
              setBuyer(true);
              setIncome(true);
              updateminMaxClick(false);
            }
            
          } else if(headerText === 'Income') {
            if(!minMaxClick){
              setHighlight(false);
              setBuyer(false);
              setCountry(false);
              updateminMaxClick(true);
            } else {
              setHighlight(true);
              setBuyer(true);
              setCountry(true);
              updateminMaxClick(false);
            }  
          }
      };

    return (
        <>
        <div className="flex-container">
          {
            highlight && <div className={(highlight && minMaxClick ? 'item-width-full' : 'item-width')}>
                <ChartBoard headerText="Highlights" childToParent={childToParent} renderData={initialHighlight} api="get_highlight" />
            </div>
          }
          {
            buyer && <div className={(buyer && minMaxClick ? 'item-width-full' : 'item-width')}>
              <ChartBoard headerText="Buyers" childToParent={childToParent} renderData={initialBuyer} api="get_buyer" />
          </div>
          }
        </div>
        <div className="flex-container">
            {
                country && <div className={(country && minMaxClick ? 'item-width-full' : 'item-width')}>
                  <ChartBoard headerText="Countries" childToParent={childToParent} renderData={initialCountry} api="get_country" />
              </div>
            }

            {
                income && <div className={(income && minMaxClick ? 'item-width-full' : 'item-width')}>
                  <ChartBoard headerText="Income" childToParent={childToParent} renderData={initialIncome} api="get_income" />
              </div>
            }
        </div>
      </>
    );
}

export default Dashboard;