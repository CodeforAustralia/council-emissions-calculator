import { useState, createContext } from "react";

export const FormContext = createContext();

// initial state for days of the week has info if it's selected or not (instead of having 2 separate states)
const daysOfTheWeek = [
  {
    id: 0,
    day: "Monday",
    isSelected: false,
    isDisable: false
  },
  {
    id: 1,
    day: "Tuesday",
    isSelected: false,
    isDisable: false
  },
  {
    id: 2,
    day: "Wednesday",
    isSelected: false,
    isDisable: false
  },
  {
    id: 3,
    day: "Thursday",
    isSelected: false,
    isDisable: false
  },
  {
    id: 4,
    day: "Friday",
    isSelected: false,
    isDisable: false
  },
  {
    id: 5,
    day: "Saturday",
    isSelected: false,
    isDisable: false
  },
  {
    id: 6,
    day: "Sunday",
    isSelected: false,
    isDisable: false
  }
];

// Example set of answers
// {
//     km: 12, // value is an integer
//     numDaysWorked: 5, // value is an integer from 1-7
//     wfhDays: ["Wednesday", "Friday", "Saturday"]
//          // value is a list of length 0-7 containing days of week,
//          // where respondent worked from home
//     onsiteDays: ["Monday", "Tuesday"]
//          // value is a list of length 0-7 containing days of week,
//          // where respondent worked onsite
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
  wfhDays: [],
  onsiteDays: [],
  travelDays: [],
  workMode: "",
  mainTransportMode: "",
  incentive: "",
  department: "",
};

const transactionId = Math.random().toString(36).substr(2, 8);

const FormProvider = ({ children }) => {
  const [answers, setAnswers] = useState({ transactionId, ...initialAnswers });
  const value = {
    answers,
    setAnswers,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export default FormProvider;
