import { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isValidInput = userInput.duration > 0;

  function handleChange(name, value) {
    setUserInput(oldUserInput => ({
        ...oldUserInput,
        [name]: +value
    }));
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput} />
      {isValidInput ? <Results input={userInput} /> : <p className='center'>Please input a duration greater than 0</p>}
    </>
  );
}

export default App;
