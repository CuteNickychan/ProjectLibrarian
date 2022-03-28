import React,{Component, useState} from 'react';
import QuoteForm from './QuoteForm';
import { PopUp } from './Popup';
import Shelve from './Shelves';

import Button from '@mui/material/Button';
import { Box } from '@mui/material';

class App extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      buttonPopup: false,
    };
  }

  render()
  {
    return(
      <div>
        <Button variant="contained" className='addQuote' onClick={()=> this.setState({buttonPopup:true})}>Add Quote</Button>
        <Shelve/>
        <PopUp trigger={this.state.buttonPopup} setTrigger={(state) => {this.setState({buttonPopup:state})}}>
          <QuoteForm setTrigger={(state) => {this.setState({buttonPopup:state})}}/>
        </PopUp>
      </div>
    );
  }
}

export default App;