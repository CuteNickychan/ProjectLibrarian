import React,{useState} from 'react';
import QuoteForm from './QuoteForm';
import { PopUp } from './Popup';
import Shelve from './Shelves';

function App()
{
  const [buttonPopup, setButtonPopup] = useState(false);

  
    return(
    <div>
      <button id="PupUp-Button" onClick={()=> setButtonPopup(true)}>Add Quote</button>
        <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
          <QuoteForm/>
        </PopUp>
      <Shelve/>
    </div>
    );
  
}

export default App;