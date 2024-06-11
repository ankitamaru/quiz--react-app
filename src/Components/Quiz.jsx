import React, { useContext } from "react";
import { QuizContext } from "../Context/QuizContext";
const Quiz = () => {
  const {
    tquestions,
    cquestion,
    question,
    options,
    answer,
    handleNext,
    handleOptions,
    rightAnswer,
    showResult,
    manageResult,
    handleRestart,
  } = useContext(QuizContext);
  return (
    <>
      <div className="quizContainer">
        {!showResult ? (
          <>
            {/* header */}
            <div className="top-header">
              <span>Total Questions: {tquestions}</span>
              <span>Current Questions: {cquestion + 1}</span>
            </div>
            {/* middle quiz box */}
            <div className="middleComponent">
              <h2>{question} </h2>
              <ul>
                {options.map((item, index) => {
                  return (
                    <li
                      className={item == rightAnswer && "correct-answer"}
                      onClick={(event) => handleOptions(event, item)}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            {/* footer */}
            <div className="footer">
              <button onClick={() => handleNext()}>
                {tquestions - 1 == cquestion ? "Finish" : "Next"}
              </button>
            </div>
          </>
        ) : (
          <div className="showResult">
            <span>Total Scores : {manageResult.total_marks}</span>
            <span>Right Answer : {manageResult.right_answer}</span>
            <span>Wrong Answer : {manageResult.wrong_answer}</span>
            <button onClick={() => handleRestart()}>Try Again</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Quiz;
