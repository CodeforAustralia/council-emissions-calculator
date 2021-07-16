import { useState, createContext } from "react";

export const FormContext = createContext();

// Example set of answers
// {
//     km: "12",
//     week: ["office", "home", null, "office", "office", null, null],
//     transportMode: ["bike", null, null, "bus", "bus", null, null],
//     incentive: "I'd like to have better biking lanes.",
//     department: "Education",
// };

const initialAnswers = {
  km: "",
  week: [null, null, null, null, null, null, null],
  transportMode: [null, null, null, null, null, null, null],
  incentive: "",
  department: "",
};

const FormProvider = ({ children }) => {
  const [answers, setAnswers] = useState(initialAnswers);
  console.log(answers);
  const value = {
    answers,
    setAnswers,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export default FormProvider;
