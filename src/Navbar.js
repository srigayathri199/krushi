import React from 'react';
import './Navbar.css';
// import {fade,  makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';

import RoomIcon from '@material-ui/icons/Room';
import {useDispatch,useSelector} from 'react-redux';


function Navbar() {
    const place = useSelector(state=>state.place);
    const dispatch = useDispatch();




    return (
        
        <div className="nav">

        <div className="Navbar">
           
                <div className="title">
                    <h2>KRUSHI<span className="colored_Text" >SEVA</span></h2>
                </div>

                <div className="search">
                    <form className="form">
                        <input className="search_item"
                        type="text"
                        placeholder="Search for products" />
                        <button className="searchIcon">
                            <SearchIcon />
                        </button>
                    </form>     
                </div>

                {/* <div className="wrapper"> */}

                <div 
                className="loginin" 
                style={{textAlign:'center'}}
                onClick={()=>dispatch({type:'SHOW_LOGIN_HOME'})}
                >
                    <p className="account">My Account</p>
                    <p style={{fontSize:'.7rem'}}>LoginIn/SignUp</p>
                </div> 

                <div 
                style={{cursor:'pointer'}} 
                onClick={()=>dispatch({type:'SHOW_MODAL',payload:{toggle:true}})} 
                className="location">
                    <RoomIcon/>
                   <p style={{fontSize:'.8rem'}}>
                       {place?place:"Select your location"}
                    </p> 
                </div>
         
                {/* </div> */}
        </div>
        </div>
    )
}
export default Navbar


