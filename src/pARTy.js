import React from 'react'; 
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Party from './components/pages/party'; 
//import Services from './components/pages/Services';
//import Products from './components/pages/Products';
//import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Party} />
          </Switch>
      </Router>
    </>
  );
}
export default App;
//<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600"></img>