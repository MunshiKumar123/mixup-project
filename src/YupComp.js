import * as Yup from "yup";

export const YupComp = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Please Enter the Email id"),

  password: Yup.string().required("Please Enter the Password"),
});
