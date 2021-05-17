import './App.css';
import React from 'react';
import Navbar from './Navbar.js';
import Banner from './Banner';
import LocationModal from './LocationModal';
import LoginHome from './signups/LoginHome';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import{useSelector,useDispatch} from 'react-redux';
import Signin from './signups/Signin';
import Signup from './signups/Signup';


function App() {
  let modal = useSelector(state=>state.showModal)
  let Loginhome = useSelector(state=>state.showLoginHome);
  const dispatch = useDispatch();

  const style = (modal|| Loginhome)?'blur' : '';

  

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">

            <div className={style}>
              <Navbar />
              <div onClick={()=>dispatch({type:'CLOSE_MODAL'})} >

              <Banner />

              </div>
            </div>

            {((modal))&& <LocationModal /> }
            {((Loginhome))&&<LoginHome />}

          </Route>

          <Route path="/signin">
            <Signin />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

        </Switch>

      </Router>

    </>
    
  );
}

export default App;
