import "../CSS/Global.css";
import Container from "@mui/material/Container";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../Header";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignupForm";
import { useSelector } from "react-redux";
import { useRef } from "react";
function Box() {
  const state = useSelector((state) => state.data.isRegister);
  const isMobile = useRef(window.innerWidth <= 768);
  return (
    <motion.div
      initial={{ x: isMobile.current ? "0%" : "-100%" }}
      animate={{ x: isMobile.current ? "0%" : state ? "260%" : "35%" }}
      transition={{ duration: 0.6 }}
    >
      <Container className="Box">
        <Header />

        <AnimatePresence mode="wait">
          {state ? <SignUpForm isMobile ={isMobile} /> : <LoginForm isMobile ={isMobile} />}
        </AnimatePresence>
      </Container>
    </motion.div>
  );
}

export default Box;
