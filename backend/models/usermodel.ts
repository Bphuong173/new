import * as yup from "yup";
export const yupRegisterSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});
export const yupLoginSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});



