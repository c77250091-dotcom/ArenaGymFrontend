import "../CSS/Global.css";
import Header from "../Header";
import SignUp2nd from "./SignUpForm2nd";
import Steep from "../Step/Stepper";
import { motion } from "framer-motion";

export default function SignUpSecondStage() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={{ width: "100%" }}
      >
        <Steep />
      </motion.div>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="card"
      >
        <Header />
        <SignUp2nd />
      </motion.div>
    </div>
  );
}
