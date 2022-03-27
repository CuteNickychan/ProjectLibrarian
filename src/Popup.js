import React from "react";

import '../style/popup.css'

function PopUp(props)
{
    return ( props.trigger) ? (
        <div className="popup" onClick={(event)=>
        {
            event.preventDefault();
            if(event.target === event.currentTarget) {
                props.setTrigger(false);
            }
        }}>
            <div className="popup-inner">
                {props.children}
            </div>  
        </div>
    ) : "";
}
export {PopUp}