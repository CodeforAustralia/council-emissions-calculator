import { useState, createContext } from "react";

export const FormContext = createContext();

// Example set of answers
// {
//     km: "12",
//     week: ["office", "home", "home", "office", "office", "didNotWork", "didNotWork"],
//     transportModes: ["bike", "didNotTravel", "didNotTravel", "bus", "bus", "didNotTravel", "didNotTravel"],
//     incentive: "I'd like to have better biking lanes.",
//     department: "Education",
// };

const initialAnswers = {
  km: "",
  week: [
    "didNotWork",
    "didNotWork",
    "didNotWork",
    "didNotWork",
    "didNotWork",
    "didNotWork",
    "didNotWork",
  ],
  transportModes: [
    "didNotTravel",
    "didNotTravel",
    "didNotTravel",
    "didNotTravel",
    "didNotTravel",
    "didNotTravel",
    "didNotTravel",
  ],
  incentive: "",
  department: "",
};

const FormProvider = ({ children }) => {
  const [answers, setAnswers] = useState(initialAnswers);
  const value = {
    answers,
    setAnswers,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
 
export default FormProvider;
