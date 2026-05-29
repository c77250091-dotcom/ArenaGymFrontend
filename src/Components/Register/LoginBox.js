import "../CSS/Global.css";
import Container from "@mui/material/Container";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../Header";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignupForm";
import { useSelector } from "react-redux";

function Box() {
  const state = useSelector((state) => state.data.isRegister);
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: state ? "260%" : "35%" }}
      transition={{ duration: 0.6 }}
    >
      <Container className="Box">
        <Header />

        <AnimatePresence mode="wait">
          {state ? <SignUpForm /> : <LoginForm />}
        </AnimatePresence>
      </Container>
    </motion.div>
  );
}

export default Box;
