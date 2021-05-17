import React from 'react';
import './Signup.css';
import {useHistory} from 'react-router-dom';


function Signup() {
    const history = useHistory();

    return (
    <>
    
        <h2 className="logo_title">KRUSHI<span className="colored_Text" >SEVA</span></h2>

        <div className="Signup_form">
        <div className="form">

            <h2 className="h2">
                Create Account
            </h2>

            <p>Your name</p>
            <input type="text"  required className="number_input" />
            <br></br>

            <p>Phone Number</p>
            <input type="tel" placeholder="Mobile number"  pattern="[0-9]{10}" required className="number_input" />
            <br></br>

            <p>Email(optional)</p>
            <input type="text" className="number_input" />
            <br></br>

            <p>Password</p>
            <input type="password" placeholder="At least 6 characters" className="number_input" />
            <br></br>

            <button className="continue">Continue</button>

            <hr style={{border:'0.2px solid rgb(206, 200, 200)'}}></hr>

            <p className="already">Already have an account?<span onClick={()=>history.push('/signin')} className="signin_in_signup">Sign In</span></p>
        </div>
        </div>

    </>    
    )
}

export default Signup
