import React from 'react';
import './SignIn.css';
import {useHistory} from 'react-router-dom';

function Signin() {
    const history = useHistory();
    return (
        <>

            <h2 className="logo_title">KRUSHI<span className="colored_Text" >SEVA</span></h2>
            
            <div className="SignIn_form">

                <div className="form">

                    <h2 className="h2">
                        Sign-In
                    </h2>

                    <p className="phone">Phone Number</p>

                    <input type="tel"   pattern="[0-9]{10}" required className="number_input" />
                    <br></br>

                    <button className="continue">Continue</button>
                </div>

                <p className="newTo">New Customer?</p>
                <button onClick={()=>history.push('/signup')} className="createAccount">Create your Account</button>
            </div>

        </>   
    )
}

export default Signin
