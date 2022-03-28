import React, {Component} from "react";

import '../style/popup.css'

class PopUp extends Component
{
    warn = 1;

    closePopup()
    {
        console.log(this.props.children.props)
        if(this.warn>0)
        {
            this.warn--;
            setTimeout(()=>{this.warn = 1;},3000);
        }else
        {
            this.props.setTrigger(false);
            this.warn=1;
        }
    }

    render()
    {
        return (this.props.trigger) ? (
            <div className="popup" onClick={(event)=>
                    {
                        event.preventDefault();
                        if(event.target === event.currentTarget) {
                            this.closePopup();
                        }
                    }}>
                <div className="popup-inner">
                    {this.props.children}
                </div>  
            </div>
        ) : "";
    }
} 
export {PopUp}