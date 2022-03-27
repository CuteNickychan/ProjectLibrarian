import React,{useState} from 'react';
import QuoteForm from './QuoteForm';
import { PopUp } from './Popup';
import Shelve from './Shelves';

import Button from '@mui/material/Button';

function App()
{
  const [buttonPopup, setButtonPopup] = useState(false);

    return(
    <div>
      <Button variant="contained" id="PupUp-Button" onClick={()=> setButtonPopup(true)}>Add Quote</Button>
        <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
          <QuoteForm setTrigger={setButtonPopup}/>
        </PopUp>
      <Shelve/>
    </div>
    );
  
}

export default App;