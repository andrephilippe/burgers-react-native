import * as Yup from "yup";
import { REQUIRED, INVALID_EMAIL, IS_NOT_NUMBER, IS_NOT_STRING } from '../../../resourcers/validators';

export default validationSchema = Yup.object().shape({
  name: Yup.string(IS_NOT_STRING)
    .required(REQUIRED),
  email: Yup.string(IS_NOT_STRING)
    .required(REQUIRED)
    .email(INVALID_EMAIL),
  phone: Yup.string(IS_NOT_STRING)
    .required(REQUIRED),
  location: Yup.string(IS_NOT_STRING)
    .required(REQUIRED),
  project: Yup.string(IS_NOT_STRING)
    .required(REQUIRED)
});