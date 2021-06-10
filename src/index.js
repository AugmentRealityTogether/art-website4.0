import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


if (window.location.host.split('.')[0] === 'party')
{
    console.log("party goes here");
}
else {
    ReactDOM.render(<App />, document.getElementById('root'));
}
console.log(window.location.host)