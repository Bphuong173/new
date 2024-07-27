import * as yup from "yup";

export const yupTodoSchema = yup.object({
  task: yup.string().required(),
});



