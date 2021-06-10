import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PartyC from './pARTy';


if (window.location.host.split('.')[0] === 'party')
{
    //console.log("party goes here");
    ReactDOM.render(<PartyC />, document.getElementById('root'));
}
else {
    ReactDOM.render(<App />, document.getElementById('root'));
}