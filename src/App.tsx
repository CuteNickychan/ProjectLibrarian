import React, { useState } from "react";
import QuoteForm from "./QuoteForm";
import { PopUp } from "./Popup";
import Shelve from "./Shelves";

import Button from "@mui/material/Button";

const App: React.FC = () => {
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <div>
      <Button
        variant="contained"
        className="addQuote"
        onClick={() => setButtonPopup(true)}
      >
        Add Quote
      </Button>
      <Shelve />
      <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}>
        <QuoteForm setTrigger={setButtonPopup} />
      </PopUp>
    </div>
  );
};

export default App;
