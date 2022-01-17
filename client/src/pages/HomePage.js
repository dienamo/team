import Button from "@mui/material/Button";
import Caroussel from "../components/Caroussel";
import { useState } from "react";
const HomePage = ({ displayText }) => {
  const [showTest, setShowTest] = useState(false);

  return (
    <div>
      <h1>Test: Are you an introvert or an extrovert?</h1>
      <h3>
        So do you consider yourself more of an introvert or an extrovert? Take
        this test, put together with input from psychoanalyst Sandrine Dury, and
        find out
      </h3>
      <Button
        disabled={showTest ? true : false}
        variant="contained"
        onClick={() => {
          setShowTest(!showTest);
        }}
      >
        Start
      </Button>
      {showTest && (
        <div>
          <Caroussel displayText={displayText} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
