import { useCallback, useEffect } from "react";
import Inputs from "../Inputs";
import { useSelector, useDispatch } from "react-redux";
import {
  login,
  submitLogin,
  LoginRequest,
  isRegister,
} from "../../Slices/RegisterSlice";

const loginFields = [
  {
    id: 1,
    label: "YourName",
    type: "text",
  },
  {
    id: 2,
    label: "Email",
    type: "text",
  },
  {
    id: 3,
    label: "Password",
    type: "password",
  },
];

function LoginForm({ isMobile }) {
  const state = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const handleLogin = useCallback(
    (label, value) => {
      dispatch(login({ label, value }));
    },
    [dispatch],
  );
  useEffect(() => {
    if (state.isValid && state.hasSubmittedLogin) {
      dispatch(
        LoginRequest({
          email: state.login.Email,
          password: state.login.Password,
        }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isValid, state.hasSubmittedLogin, dispatch]);

  const onSubmit = useCallback(() => {
    dispatch(submitLogin());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  return (
    <div className="login">
      {loginFields.map((field) => (
        <Inputs
          key={field.id}
          label={field.label}
          type={field.type}
          onCommit={handleLogin}
          error={state.errors?.[field.label]?.[0]}
        />
      ))}

      <button className="submitBtn" onClick={() => onSubmit()}>
        Login
      </button>
      {isMobile.current ? (
        <p
          onClick={() => dispatch(isRegister())}
          style={{ cursor: "pointer", textAlign: "center", marginTop: "10px" }}
        >
          Don't have an account? <span style={{ color: "red" }}>Sign Up</span>
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default LoginForm;
