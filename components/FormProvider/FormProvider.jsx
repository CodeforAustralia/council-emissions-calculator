import { useState, createContext } from "react";

export const FormContext = createContext();

// Example set of answers
// {
//     km: 12, // value is an integer
//     numDaysWorked: 5, // value is an integer from 1-7
//     travelDays: ["Monday", "Wednesday", "Friday"],
//          // value is a list of length 0-7 containing days of week
//     mainTransportMode: "bus",
//          // value is a string containing a transport mode from `modesOfTransport` list (in constants.js)
//     incentive: "I'd like to have better biking lanes.",
//          // value is a free text string
//     department: "Education",
//          // value is a string containing a department from `departments` list (in constants.js)
// };

const initialAnswers = {
  km: "",
  numDaysWorked: 0,
  travelDays: [],
  workMode: "",
  mainTransportMode: "",
  incentive: "",
  department: "",
};

const transactionId = Math.random().toString(36).substr(2,8);

const FormProvider = ({ children }) => {
  const [answers, setAnswers] = useState({transactionId, ...initialAnswers});
  const value = {
    answers,
    setAnswers,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
 
export default FormProvider;
