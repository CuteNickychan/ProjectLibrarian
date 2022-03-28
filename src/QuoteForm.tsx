import React, { useState } from "react";

import { addDoc } from "firebase/firestore";
import { collection } from "firebase/firestore";
import db from "./firebase";

import { TextField, Box, Button } from "@mui/material";

import "../style/QuoteForm.css";

interface Props {
  callBack: (s: boolean) => void;
  setTrigger: (s: boolean) => void;
}

const QuoteForm: React.FC<Props> = (props) => {
  const [authorError, setAuthorError] = useState(false);
  const [quoteError, setQuoteError] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [comment, setComment] = useState("");

  const validateForm = () => {
    let valid = true;
    if (!/\S/.test(quote)) {
      valid = false;
      setQuoteError(true);
    }
    if (!/\S/.test(author)) {
      valid = false;
      setAuthorError(true);
    }
    return valid;
  };

  const handleSubmit = async () => {
    try {
      if (validateForm()) {
        const docRef = await addDoc(collection(db, "quote"), {
          quote,
          author,
          comment,
          date: new Date().getTime(),
        });

        setSubmitSuccess(true);
        setTimeout(() => {
          props.setTrigger(false);
        }, 500);
      }
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <div>
      <Box
        className="box"
        sx={{
          "& > :not(style)": { m: 1 },
          display: "flex",
          alignItems: "center",
        }}
      >
        <TextField
          helperText="Enter the Authors Name here."
          label="Author"
          required
          error={authorError}
          sx={{ width: "40%" }}
          onChange={(event) => {
            setAuthor(event.target.value);
            if (props.callBack) {
              if (/\S/.test(author)) props.callBack(false);
              else props.callBack(true);
            }
            setAuthorError(false);
          }}
        />
        <TextField
          helperText="Enter a Comment to be displayed alongside the Quote"
          onChange={(event) => {
            setComment(event.currentTarget.value);
          }}
          label="Comment"
          sx={{ width: "60%" }}
        />
      </Box>
      <Box
        className="box"
        sx={{
          "& > :not(style)": { m: 1 },
          display: "flex",
          alignItems: "center",
        }}
      >
        <TextField
          className="textAreaQuote"
          label="Quote"
          multiline
          required
          error={quoteError}
          onChange={(event) => {
            setQuote(event.target.value);
            if (props.callBack) {
              if (/\S/.test(quote)) props.callBack(false);
              else props.callBack(true);
            }
            setQuoteError(false);
          }}
        />
      </Box>
      <Box
        className="box"
        sx={{
          "& > :not(style)": { m: 1 },
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button
          variant="contained"
          className="submitButton"
          color={
            authorError || quoteError
              ? "error"
              : submitSuccess
              ? "success"
              : "primary"
          }
          onClick={handleSubmit}
        >
          Hello!
        </Button>
      </Box>
    </div>
  );
};

export default QuoteForm;
