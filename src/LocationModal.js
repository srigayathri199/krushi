import React, { useState ,useRef} from 'react';
import './LocationModel.css';
import {useDispatch,useSelector} from 'react-redux';

function LocationModal() {
    const dis = useDispatch();
    
    const place = useSelector(state=>state.place);
    const area = useSelector(state=>state.area);
    const country = useSelector(state=>state.country);
    
    const [typeLocation,setTypeLocation]=useState('');
    const toggle = useSelector(state=>state.toggle);
    const input = useRef(null)


    console.log(place,area,country,toggle);
    
    const locate = (e)=>{
            setTypeLocation(e.target.value)
    }
  
    const keyname = (e)=>{
        if(e.code==="Enter"){
            dis({type:'DETECT_PLACE',payload:{city:typeLocation}});
            input.current.value=''
        }
    }
    
    const location = async ()=>{
        await navigator.geolocation.getCurrentPosition(
            (pos)=>{
            console.log(pos);
            let lat = pos.coords.latitude;
            let long = pos.coords.longitude;
            if(lat && long){
                fetch(`https://geocode.xyz/${lat},${long}?geoit=json`)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(`Unable to process request : Problem with geocode`);
                        }
                        console.log(response);
                        return response.json()
                    }) 
                    .then((data) => {
                        if(data.city && data.country){
                       
                        dis({type:'DETECT_PLACE',payload:{city:data.city,area:data.staddress,country:data.country}})

                        }
                    })
                    .catch(err=>alert(err.message))
            }
        },err=>console.log(err.message));
        
    }
    // setTimeout(()=>dis({type:'SHOW_MODAL',payload:{toggle:true}}),3000)   


    return (
        <div className={`modal arrowtop`}>
                {(toggle && (place))?
                (<div className="modalDesc">
                    <p style={{fontSize:'1rem',fontWeight:500}} >Your Location</p>
                    <div className="getafterGiven">
                        <p style={{marginLeft:'8px'}}>{
                        (area && country && place)?
                        (`${area},${place},${country}`):(`${place}`)
                        }</p>
                        <button 
                        className="detect"
                        onClick={
                            ()=>{
                                dis({type:'TOGGLE_MODAL',payload:{toggle:false}});

                            }}
                        >
                            change
                        </button>
                    </div>

                </div>):((
                    <div className="modalDesc">
                    <p>Select your location</p>
    
                    <div className="get">
                        <input 
                        className="location"
                        ref={input} 
                        value={typeLocation} 
                        onChange={locate} 
                        onKeyPress={keyname} type="text" 
                        placeholder="Type your location"/>-
                        <div className="or">or</div>-
                        <button className ="detect" onClick={()=>{
                            location();
                        }}>Detect</button>
                    </div>
                </div>
                ))
}
        </div>
    )
}

export default LocationModal
