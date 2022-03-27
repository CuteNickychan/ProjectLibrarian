import React from "react";

import '../style/popup.css'

function PopUp(props)
{
    return ( props.trigger) ? (
        <div className="popup">
            <div  className="popup-inner">
                <button  className="popup-close" onClick={() => {props.setTrigger(false);}}>close</button>
                {props.children}
            </div>  
        </div>
    ) : "";
}
export {PopUp}