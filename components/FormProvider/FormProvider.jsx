import { useState, createContext } from "react";

export const FormContext = createContext();

// Example set of answers
// {
//     workMode: "hybrid"  // one of "wfh", "onsite" or "hybrid"
//     km: 12, // value is an integer
//     numDaysWorked: 5, // value is an integer from 1-7
//     wfhDays: ["Wednesday", "Friday", "Saturday"]
//          // value is a list of length 0-7 containing days of week,
//          // where respondent worked from home
//     onsiteDays: ["Monday", "Tuesday"]
//          // value is a list of length 0-7 containing days of week,
//          // where respondent worked onsite
//     travelMethods: ["Bus", "Train/tram"],
//          // contains a list of travel methods from `travelMethods` list (in constants.js).
//     travelMethodByDay: {
//        "Monday": "Car",
//        "Tuesday": "",
//        "Wednesday": "Bus",
//        "Thursday": "",
//        "Friday": "Car"
//        "Saturday": "",
//        "Sunday": ""
//     },
//          // A JSON object with days of the week as keys, and
//          // travel methods as the values. Each day contains one travel method from `travelMethods` list (in constants.js).
//     carpoolPassengerCount: 0, // integer value from 1-7
//     travelDays: ["Monday", "Tuesday"],
//          // [DEPRECATED] value is a list of length 0-7 containing days of week,
//     mainTransportMode: "bus",
//          // [DEPRECATED] value is a string containing a transport mode from `travelMethods` list (in constants.js)
//     incentive: "I'd like to have better biking lanes.",
//          // value is a free text string
//     department: "Education",
//          // value is a string containing a department from `departments` list (in constants.js)
// };

const initialAnswers = {
  workMode: "",
  km: "",
  numDaysWorked: 0,
  wfhDays: [],
  onsiteDays: [],
  travelMethods: [],
  travelMethodByDay: {
    "Monday": "",
    "Tuesday": "",
    "Wednesday": "",
    "Thursday": "",
    "Friday": "",
    "Saturday": "",
    "Sunday": ""
  },
  carpoolPassengerCount: 0,
  travelDays: [],
  mainTransportMode: "",
  incentive: "",
  department: "",
};

const transactionId = Math.random().toString(36).substring(2, 8);

const FormProvider = ({ children }) => {
  const [answers, setAnswers] = useState({ transactionId, ...initialAnswers });
  const value = {
    answers,
    setAnswers,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export default FormProvider;
