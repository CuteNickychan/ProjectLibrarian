import React, { useState } from "react";

import {
  collection,
  getDocs,
  DocumentData,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import db from "./firebase";

import {
  Button,
  Grid,
  Card,
  CardActions,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

const Shelve: React.FC = () => {
  const [quoteList, setQuoteList] = useState<
    QueryDocumentSnapshot<DocumentData>[]
  >([]);

  const LoadData = async () => {
    const querySnapshot = await getDocs(collection(db, "quote"));

    setQuoteList(querySnapshot.docs);
  };

  return (
    <Box sx={{ padding: "1rem" }}>
      <Button
        sx={{ marginBottom: "1rem", width: "100%" }}
        variant="contained"
        onClick={LoadData}
      >
        LoadData
      </Button>
      <Grid container spacing={2}>
        {quoteList.map((doc) => (
          <Grid xs item minWidth={"15rem"} key={doc.id}>
            <Card>
              <CardContent>
                {/* <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              ></Typography> */}
                <Box>
                  <Typography variant="h5" component="div">
                    {doc.data().quote}
                  </Typography>
                </Box>
              </CardContent>
              <CardContent
                sx={{
                  color: "primary.contrastText",
                  bgcolor: "primary.main",
                  margin: 0,
                }}
              >
                <Typography
                  sx={{ margin: 0, fontWeight: "bold", fontSize: 20 }}
                  align="right"
                >
                  - {doc.data().author}
                </Typography>
                <Typography variant="body2">{doc.data().comment}</Typography>
              </CardContent>
              {/* <CardActions> 
              <Button size="small">Learn More</Button>
              </CardActions>
            */}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Shelve;
