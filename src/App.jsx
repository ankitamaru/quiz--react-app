import { useState } from "react";

import "./App.css";
import Quiz from "./Components/Quiz";
import QuizDataProvider from "./Context/QuizContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <QuizDataProvider>
        <Quiz />
      </QuizDataProvider>
    </>
  );
}

export default App;
