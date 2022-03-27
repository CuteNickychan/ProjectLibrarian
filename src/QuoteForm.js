import React, { Component } from "react";

import { addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";

import {PopUp} from './Popup'

class QuoteForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        quote: '',
        author: '',
        comment:''
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({quote: event.target.value});
    }

    async handleSubmit(event) {
        console.log("A Test");
        try
        {

            const docRef = await addDoc(collection(db, "quote"), 
            {
                quote: this.state.quote,
                author: this.state.author,
                comment: this.state.comment,
                date: new Date().getTime()
            });
            console.log(docRef);
            
        }catch(e)
        {
            console.warn(e);
        }
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <div className="inline-grid" style={display=inlinegrid}>

            <label>
                Quote:
                <input type="text" value={this.state.quote} onChange={this.handleChange} />
            </label>
            <label>
                Quote2:
                <input type="text" value={this.state.quote} onChange={this.handleChange} />
            </label>
            </div>
          <input type="submit" quote="Submit" />
        </form>
      );
    }
}

export default QuoteForm;