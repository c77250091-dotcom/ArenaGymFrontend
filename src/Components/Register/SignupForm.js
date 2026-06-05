import { useCallback, useEffect } from "react";
import Inputs from "../Inputs";
import { useSelector, useDispatch } from "react-redux";
import { signUp, submitSignUP, isRegister } from "../../Slices/RegisterSlice";
import { useNavigate } from "react-router-dom";

const signUpFields = [
  {
    id: 1,
    label: "FirstName",
    type: "text",
    fullWidth: false,
    isSelect: false,
  },
  {
    id: 2,
    label: "SecondName",
    type: "text",
    fullWidth: false,
    isSelect: false,
  },
  {
    id: 3,
    label: "YourAge",
    type: "text",
    fullWidth: true,
    isSelect: false,
  },
  {
    id: 4,
    label: "Email",
    type: "text",
    fullWidth: true,
    isSelect: false,
  },

  {
    id: 5,
    label: "Password",
    type: "password",
    fullWidth: true,
    isSelect: false,
  },
  {
    id: 6,
    label: "ConfirmPassword",
    type: "password",
    fullWidth: true,
    isSelect: false,
  },
];

function SignUpForm({ isMobile }) {
  const state = useSelector((state) => state.data);
  const isValid = useSelector((state) => state.data.isValid);
  const step = useSelector((state) => state.data.step);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const handleSignUp = useCallback(
    (label, value) => {
      dispatch(signUp({ label, value }));
    },
    [dispatch],
  );

  useEffect(() => {
    if (isValid && step === 1) {
      navigate("/signUp/2");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isValid, step , navigate]);

  const onSubmit = useCallback(() => {
    dispatch(submitSignUP());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className="signUp">
      {signUpFields.map((field) => (
        <div
          key={field.id}
          className={field.fullWidth ? "fullWidth" : "halfWidth"}
        >
          <Inputs
            label={field.label}
            type={field.type}
            onCommit={handleSignUp}
            error={state.errors?.[field.label]?.[0]}
          />
        </div>
      ))}
      <button
        className="fullWidth"
        onClick={() => {
          onSubmit();
        }}
      >
        Sign Up
      </button>
      {isMobile.current ? (
        <p
          className="fullWidth"
          onClick={() => dispatch(isRegister())}
          style={{ cursor: "pointer", marginTop: "10px", textAlign: "center" }}
        >
          have an account? <span style={{ color: "red" }}>Log In</span>
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default SignUpForm;
