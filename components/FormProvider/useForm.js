import { useContext } from "react";
import { FormContext } from "./FormProvider";

const useForm = () => useContext(FormContext);

export default useForm;
