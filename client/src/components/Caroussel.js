import React, { useState, useEffect } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Form from "./Form";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Caroussel = ({ displayText }) => {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState({});
  const [page, setPage] = React.useState(1);
  const [choice, setChoice] = React.useState(0);
  const [response, setResponse] = React.useState({});
  const history = useNavigate();

  const handleResponse = (questionIndex, responseIndex) =>
    setResponse({ ...response, [questionIndex]: responseIndex });

  useEffect(() => {
    const fetchQuestions = () => {
      axios
        .get("http://localhost:8000/api/questions")
        .then((questions) => {
          setQuestions(questions.data);
          setQuestion(questions.data[0]);
          setResponse(
            questions.data.reduce((acc, val, index) => {
              acc[index] = 0;
              return acc;
            }, {})
          );
        })
        .catch((err) => console.log(err));
    };

    fetchQuestions();
  }, []);

  const handleChange = (event, value) => {
    const pageIndex = value - 1;
    setPage(value);
    setQuestion(questions[pageIndex]);
    setChoice(response[pageIndex]);
  };

  const handleChoice = (choice) => {
    setChoice(choice);
    handleResponse(page - 1, choice);
  };

  const handleSend = () => {
    axios
      .post("http://localhost:8000/api/results", { response })
      .then((response) => {
        displayText(response.data[0].result);
        history("/result");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Stack spacing={2}>
        <Typography>
          Question {page} of {questions.length}
        </Typography>
        {question.question}
        <Form
          getValue={handleChoice}
          value={choice}
          responses={question.responses}
        />
        <Pagination
          count={questions.length}
          page={page}
          onChange={handleChange}
        />
      </Stack>
      <Button
        disabled={page < 3 ? true : false}
        variant="contained"
        color="success"
        onClick={handleSend}
      >
        Display result
      </Button>
    </div>
  );
};

export default Caroussel;
