import "./CSS/Global.css";
import { motion } from "framer-motion";
import Stack from "@mui/material/Stack";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { useSelector, useDispatch } from "react-redux";
import { memo, useCallback } from "react";
import { isRegister } from "../Slices/RegisterSlice";

const Logo = memo(function Logo() {
  const state = useSelector((state) => state.data.isRegister);
  const dispatch = useDispatch();

  const handleToggle = useCallback(() => {
    dispatch(isRegister());
  }, [dispatch]);

  return (
    <motion.div
      className="logo"
      initial={{ x: "100%" }}
      animate={{
        x: state ? "-55%" : "0%",
        clipPath: state
          ? "ellipse(90% 140% at 0% 50%)"
          : "ellipse(90% 140% at 100% 50%)",
      }}
      transition={{ duration: 0.6 }}
    >
      <div className="content">
        <Stack
          direction="row"
          spacing={1}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Arena Gym</h2>

          <FitnessCenterIcon
            style={{
              fontSize: "70px",
              color: "#d20c0c",
            }}
          />
        </Stack>

        <Stack direction="row" spacing={2}>
          <button onClick={handleToggle}>
            {state ? "LogIn" : "NewMember"}
          </button>
        </Stack>
      </div>
    </motion.div>
  );
});

export default Logo;
