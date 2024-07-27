import * as yup from "yup";

export const yupTodolabelSchema = yup.object({
  task: yup.string().required(),
});







