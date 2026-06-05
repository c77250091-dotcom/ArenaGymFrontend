import Header from "../Header";
import Steep from "../Step/Stepper";
import SignUp3rd from "./SignUpForm3rd";
import { motion } from "framer-motion";

export default function SignUpThirdStage() {
  return (
    <div className="register"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        overflow:"hidden"
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
        className="card two"
        style={{height:"400px"}}
      >
        <Header />
        <SignUp3rd />
      </motion.div>
    </div>
  );
}
