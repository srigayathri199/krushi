import React from 'react';
import './Banner.css';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import Badge from '@material-ui/core/Badge';




function Banner() {

    
    return (
        <>
        
        <div className="banner">
            <div className="desc">
                <h2>Get<br/><span className="colored_Text">NATURAL & ORGANIC</span> Products <span className="colored_Text">DELIVERED</span> to your Door Step</h2>

                <p>the sentence isn't clear,sentence isn't clearsentence isn't clearsentence isn't clear</p>
            </div>

            <div  className="image">
                <img src="images/ladyimage.png" alt=""/>
                <div className="cart">
                     <Badge badgeContent={4} color="secondary">
                        <LocalMallIcon />
                     </Badge>  
                </div>
            </div>
        </div>
        </>
    )
}

export default Banner
