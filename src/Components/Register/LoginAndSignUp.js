import Box from "./LoginBox";
import Logo from "../Logo";
import "../CSS/Global.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function LoginAndSignUpPage() {
  const step = useSelector((state) => state.data.step);
  const navigate = useNavigate();
  useEffect(() => {
    if (step === 3) {
      navigate("/Dashboard");
    }
  }, [step, navigate]);
  return (
    <div style={{overflow:"hidden"}} className="login-signup">
      <Box />
      <Logo />
    </div>
  );
}
