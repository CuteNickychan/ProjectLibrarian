import React, { useState } from "react";

import {
  collection,
  getDocs,
  DocumentData,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import db from "./firebase";

import { Button, Grid } from "@mui/material";

async function LoadData() {
  const querySnapshot = await getDocs(collection(db, "quote"));

  this.setState({ data: querySnapshot.docs });
}

const Shelve: React.FC = () => {
  const [quoteList, setQuoteList] = useState<
    QueryDocumentSnapshot<DocumentData>[]
  >([]);

  const LoadData = async () => {
    const querySnapshot = await getDocs(collection(db, "quote"));

    setQuoteList(querySnapshot.docs);
  };

  return (
    <div>
      <Button variant="contained" onClick={LoadData}>
        LoadData
      </Button>
      <Grid container spacing={2}>
        {quoteList.map((doc) => (
          <Grid item minWidth={"15rem"} key={doc.id}>
            {doc.data().quote}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Shelve;
