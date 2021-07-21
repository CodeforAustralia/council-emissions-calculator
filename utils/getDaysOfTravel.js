import { daysOfWeek } from "./constants";

const getDaysOfTravel = (officeDays) => {
  const officeDayIndexes = officeDays
    .map((d, i) => (d === "office" ? i : null))
    .filter((e) => e !== null);
  return daysOfWeek.filter((d, i) => (officeDayIndexes.includes(i) ? d : null));
};

export default getDaysOfTravel;
