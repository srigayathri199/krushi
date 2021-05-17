import React from 'react';
import './../LocationModel.css';
import './LoginHome.css';
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';


function LoginHome() {

    const showLogin = useSelector(state=>state.showLoginHome);
    const history = useHistory()
    console.log(history);
    console.log(showLogin);

    return (
        <div className="Loginmodal">
            <div className="Desc">
                
                <button 
                className="signin"
                onClick={()=>history.push('/signin')}>
                    Sign In
                </button>
                <p className="newC">New Customer?<span className ="newCustomer" onClick={()=>history.push('/signup')}>Start here</span></p>

             

            </div>
        </div>
    )
}

export default LoginHome
