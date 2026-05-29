import { useCallback, useEffect } from "react";
import Inputs from "../Inputs";
import { useSelector, useDispatch } from "react-redux";
import { login, submitLogin, LoginRequest } from "../../Slices/RegisterSlice";

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

function LoginForm() {
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
  }, [state.isValid]);

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
    </div>
  );
}

export default LoginForm;
