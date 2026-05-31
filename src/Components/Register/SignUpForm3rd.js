import Inputs from "../Inputs";
import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  signUpThird,
  submitSignUPThird,
  signUpRequest,
  stageThree
} from "../../Slices/RegisterSlice";
import { motion } from "framer-motion";

const signUpFields = [
  {
    id: 1,
    label: "Choose Coach",
    type: "select",
    fullWidth: true,
    isSelect: "coach",
  },
  {
    id: 2,
    label: "Choose MemberShip",
    type: "select",
    fullWidth: true,
    isSelect: "MemberShip",
  },
  {
    id: 3,
    label: "Months",
    type: "select",
    fullWidth: true,
    isSelect: "Month",
  },
  {
    id: 4,
    label: "Goal",
    type: "select",
    fullWidth: true,
    isSelect: "Goal",
  },
];

export default function SignUp3rd() {
  const state = useSelector((state) => state.data);
  const step = useSelector((state) => state.data.step);
  let dispatch = useDispatch();
  const isSuccess = useSelector((state) => state.data.isSuccess);
  const navigate = useNavigate();

useEffect(() =>{
  dispatch(stageThree())
},[])

  useEffect(() => {
    if (isSuccess) navigate("/Dashboard");
  }, [isSuccess]);

  useEffect(() => {
    if (state.isValid && state.step === 3) {
      dispatch(
        signUpRequest({
          FirstName: state.signUp.FirstName,
          SecondName: state.signUp.SecondName,
          Email: state.signUp.Email,
          password: state.signUp.Password,
          Age: state.signUp.YourAge,
          Height: state.signUPstage2["Height(cm)"],
          Weight: state.signUPstage2["Weight(kg)"],
          Waist: state.signUPstage2["Waist(cm)"],
          Neck: state.signUPstage2["Neck(cm)"],
          FitnessLevel:
            state.signUPstage2.FitnessLevel.match(/\(([^)]+)\)/)?.[1],
          Coach: state.signUPstage3["Choose Coach"],
          Membership: state.signUPstage3["Choose MemberShip"].split("(")[0],
          "Period of Subscription": state.signUPstage3.Months,
        }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isValid, state.step]);

  const handleSignUp = useCallback(
    (label, value) => {
      dispatch(signUpThird({ label, value }));
    },
    [dispatch],
  );

  const onSubmit = useCallback(() => {
    dispatch(submitSignUPThird());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <>
      <div style={{ gap: "7px" }} className="signUp2nd">
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
        <button className="fullWidth" onClick={onSubmit}>
          Finish
        </button>
        <div className="knowledge">
          <Link to="/Coaches" style={{ textDecoration: "none" }}>
            <p style={{ cursor: "pointer" }}>ClickHere To View Coaches</p>
          </Link>
          <Link to="/MemberShips" style={{ textDecoration: "none" }}>
            <p style={{ cursor: "pointer" }}>ClickHere To View MemberShips</p>
          </Link>
        </div>
      </div>
    </>
  );
}
