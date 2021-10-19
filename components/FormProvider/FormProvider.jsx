import { useState, createContext } from "react";

export const FormContext = createContext();

// Example set of answers
// {
//     km: "12",
//     "nWorkDays": 5,
//     "travelDays": ["Monday", "Wednesday", "Friday"],
//     mainTransportMode: "bus",
//     incentive: "I'd like to have better biking lanes.",
//     department: "Education",
// };

const initialAnswers = {
  km: "",
  nWorkDays: 0,
  travelDays: [],
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
