import { z } from "zod";

const LoginValidation = z.object({
  YourName: z.string().min(3, "Name is Too Short").max(8, "Name is Too Long"),
  Email: z.string().email("the Form of The Email is Wrong"),
  Password: z
    .string()
    .min(6, "the Password Must be at least 6 character")
    .regex(
      /^[a-zA-Z\d]{6,}$/,
      "the password must contains letters and numbers only",
    ),
});

const SignUpValidation = z
  .object({
    FirstName: z
      .string()
      .min(3, "Name is Too Short")
      .max(8, "Name is Too Long"),
    SecondName: z
      .string()
      .min(3, "Name is Too Short")
      .max(8, "Name is Too Long"),
    YourAge: z.preprocess(
      (val) => Number(val),
      z
        .number()
        .min(18, "The Age Must Be At  Least 18 Years Old")
        .max(70, "The Age Is Not Normal"),
    ),
    Email: z.string().email("the Form of The Email is Wrong"),
    Password: z
      .string()
      .min(6, "the Password Must be at least 6 character")
      .regex(
        /^[a-zA-Z\d]{6,}$/,
        "the password must contains letters and numbers only",
      ),
    ConfirmPassword: z.string(),
  })
  .superRefine((data, ctx) => {
    if (data.Password !== data.ConfirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
        path: ["ConfirmPassword"],
      });
    }
  });

const Stage2Validation = z.object({
  "Height(cm)": z.preprocess(
    (val) => Number(val),
    z
      .number()
      .positive("Height must be a positive number")
      .min(100, "Height must be between 100-200")
      .max(200, "Height must be between 100-200"),
  ),
  "Weight(kg)": z.preprocess(
    (val) => Number(val),
    z.number().positive("Weight must be a positive number"),
  ),
  "Waist(cm)": z.preprocess(
    (val) => Number(val),
    z.number().positive("Waist must be a positive number"),
  ),
  "Neck(cm)": z.preprocess(
    (val) => Number(val),
    z.number().positive("Neck must be a positive number"),
  ),
  FitnessLevel: z.string().min(1, "You Must Choose Your Fitness Level"),
});

const Stage3Validation = z.object({
  "Choose Coach": z.string().min(1, "You Must Choose Coach"),
  "Choose MemberShip": z.string().min(1, "You Must Choose Membership"),
  Months: z.string().min(1, "You Must Choose Month"),
  Goal: z.string().min(1, "You Must Choose Goal"),
});

export function ValidationStage3(data) {
  let result = Stage3Validation.safeParse(data);
  return result.success ? {} :result.error.flatten().fieldErrors
}

export function ValidationStage2(data) {
  let result = Stage2Validation.safeParse(data);
  return result.success ? {} :result.error.flatten().fieldErrors
}

export default function ValidationLogin(data) {
  let LoginResult = LoginValidation.safeParse(data);

return LoginResult.success ? {} :LoginResult.error.flatten().fieldErrors
}

export function ValidationSignUp(data) {
  let SignUpResult = SignUpValidation.safeParse(data);
return SignUpResult.success ? {} :SignUpResult.error.flatten().fieldErrors
}
