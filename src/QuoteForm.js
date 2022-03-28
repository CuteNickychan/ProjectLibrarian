import React, { Component } from "react";

import { addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";

import { TextField, Box,Button } from '@mui/material';

import '../style/QuoteForm.css';

class QuoteForm extends Component {

    authorError= false;
    quoteError= false;
    submitSuccess= false;

    constructor(props) {
      super(props);
      this.state = {
        quote: '',
        author: '',
        comment:''
    };
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm()
    {
        var valid = true;
        if (!/\S/.test(this.state.quote))
        {
            valid = false;
            this.quoteError = true;
        }
        if (!/\S/.test(this.state.author))
        {
            valid = false;
            this.authorError = true;
        }
        this.forceUpdate();
        return valid;
    }

    async handleSubmit(event) {
        try
        {
            if (this.validateForm())
            {
                
                const docRef = await addDoc(collection(db, "quote"), 
                {
                    quote: this.state.quote,
                    author: this.state.author,
                    comment: this.state.comment,
                    date: new Date().getTime()
                });
                
                this.submitSuccess = true;
                this.forceUpdate();
                setTimeout(()=>{this.props.setTrigger(false)},500);
            } 
        }catch(e)
        {
            console.warn(e);
        }
    }

    render() {
      return (
          <div> 
            <Box    className="box" 
                    sx=
                    {{
                        '& > :not(style)': { m: 1 },
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                <TextField
                    helperText="Enter the Authors Name here."
                    label="Author"
                    required
                    error={this.authorError}
                    sx={{width:"40%"}}
                    onChange={(event) => 
                        {
                            this.setState({author: event.target.value})
                            this.authorError=false;
                        }
                    }
                />
                <TextField
                    helperText="Enter a Comment to be displayed alongside the Quote"
                    onChange={(event) => {this.setState({comment: event.target.value})}}
                    label="Comment"
                    sx={{width:"60%"}}
                />
            </Box>
            <Box    
                className="box"
                sx=
                    {{
                        '& > :not(style)': { m: 1 },
                        display:'flex',
                        alignItems: 'center',
                    }}>
                <TextField
                    className="textAreaQuote" 
                    label="Quote"
                    multiline
                    required
                    error={this.quoteError}
                    onChange={(event) => 
                        {
                        this.setState({quote: event.target.value})
                        this.quoteError = false;
                        }
                    }
                />        
            </Box>
            <Box    
                className="box"
                sx=
                    {{
                        '& > :not(style)': { m: 1 },
                        display:'flex',
                        alignItems: 'center',
                    }}>

                <Button 
                    variant="contained"
                    className="submitButton"
                    color=
                    {
                        this.authorError || this.quoteError ? 
                            "error" : this.submitSuccess ? 
                                "success" : "primary" }
                    onClick={()=> {this.handleSubmit();}}>Hello!</Button>
            </Box>
        </div>
        );
    }
}

export default QuoteForm;