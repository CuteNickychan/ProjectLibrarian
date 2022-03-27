import React, { Component } from "react";

import { getDocs } from "firebase/firestore";

import { collection } from "firebase/firestore";

import Button from '@mui/material/Button';

async function LoadData()
{
  const querySnapshot = await getDocs(collection(window.db, "quote"));
        
  this.setState({ data: querySnapshot.docs });
}

class Shelve extends Component {
  
  constructor() {
    super();
    this.state = { data: [] };

    this.LoadData =LoadData.bind(this);
  }
  
  render() {
    return (
      <div>
        <Button variant="contained" onClick={() => {this.LoadData()}}>LoadData</Button>
        <ul>
          {this.state.data.map(doc => (
            <li key={doc.id}>
              {doc.data().quote}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Shelve