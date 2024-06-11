import { createContext, useState } from "react";
import { quizData } from "../data/quizData";

export const QuizContext = createContext();

const QuizDataProvider = ({ children }) => {
  console.log("Context API called", quizData);

  const [manageResult, setManageResult] = useState({
    total_marks: 0,
    right_answer: 0,
    wrong_answer: 0,
  });

  const [tquestions, setTquestions] = useState(quizData.questions.length);
  const [cquestion, setCquestion] = useState(0);
  const [rightAnswer, setRightAnswer] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setshowResult] = useState(false);

  const { question, options, answer } = quizData.questions[cquestion];

  const handleNext = () => {
    console.log("Next");
    setCquestion((prev) => prev + 1);
    setRightAnswer("");
    setSelectedAnswer("");

    document
      .querySelector("li.correct-answer")
      ?.classList.remove("correct-answer");
    document.querySelector("li.wrong-answer")?.classList.remove("wrong-answer");

    if (cquestion == quizData.questions.length - 1) {
      console.log("enter");
      setshowResult(true);
      setCquestion(0);
    }
  };

  const handleOptions = (event, item) => {
    if (!selectedAnswer) {
      setRightAnswer(answer);
      setSelectedAnswer(item);
      if (item == answer) {
        event.target.classList.add("correct-answer");
        setManageResult((prev) => ({
          ...prev,
          total_marks: prev.total_marks + 5,
          right_answer: prev.right_answer + 1,
        }));
      } else {
        event.target.classList.add("wrong-answer");
        setManageResult((prev) => ({
          ...prev,
          wrong_answer: prev.wrong_answer + 1,
        }));
      }
    }
  };

  const handleRestart = () => {
    setManageResult({
      total_marks: 0,
      right_answer: 0,
      wrong_answer: 0,
    });
    setshowResult(false);
    setCquestion(0);
    setRightAnswer("");
    setSelectedAnswer("");
  };
  return (
    <QuizContext.Provider
      value={{
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
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizDataProvider;
