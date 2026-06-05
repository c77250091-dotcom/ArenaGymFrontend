import { useCallback, useEffect } from "react";
import Inputs from "../Inputs";
import { useSelector, useDispatch } from "react-redux";
import "../CSS/Global.css";
import {
  signUpSecond,
  submitSignUPSecond,
  stageTwo,
} from "../../Slices/RegisterSlice";
import { useNavigate } from "react-router-dom";

const signUpFields = [
  {
    id: 1,
    label: "Height(cm)",
    type: "text",
    fullWidth: false,
    isSelect: false,
  },
  {
    id: 2,
    label: "Weight(kg)",
    type: "text",
    fullWidth: false,
    isSelect: false,
  },
  {
    id: 3,
    label: "Waist(cm)",
    type: "text",
    fullWidth: false,
    isSelect: false,
  },
  {
    id: 4,
    label: "Neck(cm)",
    type: "text",
    fullWidth: false,
    isSelect: false,
  },
  {
    id: 5,
    label: "FitnessLevel",
    type: "select",
    fullWidth: true,
    isSelect: "fitness",
  },
];

export default function SignUp2nd() {
  const state = useSelector((state) => state.data);
  const step = useSelector((state) => state.data.step);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(stageTwo());
  }, []);

  useEffect(() => {
    if (step === 2) {
      navigate("/signUp/3");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, navigate]);

  const handleSignUp = useCallback(
    (label, value) => {
      dispatch(signUpSecond({ label, value }));
    },
    [dispatch],
  );
  const onSubmit = useCallback(() => {
    dispatch(submitSignUPSecond());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  return (
    <div className="signUp2nd" initial={{ y: "-100%" }}>
      {signUpFields.map((field) => (
        <div
          key={field.id}
          className={field.fullWidth ? "fullWidth" : "halfWidth"}
        >
          <Inputs
            label={field.label}
            type={field.type}
            isSelect={field.isSelect}
            onCommit={handleSignUp}
            error={state.errors?.[field.label]?.[0]}
          />
        </div>
      ))}

      <button className="fullWidth" onClick={() => onSubmit()}>
        Next
      </button>
    </div>
  );
}
