// App.jsx
import "./App.css";
import "./Components/CSS/Global.css";
import LoginAndSignUp from "./Components/Register/LoginAndSignUp";
import SignUpSecondStage from "./Components/Register/SignUpFormSecondStage";
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignUpThirdStage from "./Components/Register/SignUpFormThirdStage";
import MemberShips from "./Components/MemberShip/MemberShips";
import Coaches from "./Components/Coaches/Coaches";
import ProtectedRoute from "./Components/Routes/ProtectedRoutes";
import Dashboard from "./Components/Dashboard/Dashboard";
import MyCoach from "./Components/Dashboard/Mycoach";
import Greeting from "./Components/Dashboard/Greeting";
import Subscription from "./Components/Dashboard/Subscription";
const theme = createTheme({
  components: {
    MuiStepIcon: {
      styleOverrides: {
        root: {
          color: "#b60b0b",
          "&.Mui-active": { color: "#d20c0c" },
          "&.Mui-completed": { color: "#d20c0c" },
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: { color: "#ffe6e6 !important", textShadow: "1px 0px 5px red" },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ overflow: "hidden" }}>
        <Routes>
          <Route path="/" element={<LoginAndSignUp />} />
          <Route path="/Coaches" element={<Coaches />} />
          <Route path="/MemberShips" element={<MemberShips />} />
          <Route element={<ProtectedRoute requiredStep={1} />}>
            <Route path="/signUp/2" element={<SignUpSecondStage />} />
          </Route>
          <Route element={<ProtectedRoute requiredStep={2} />}>
            <Route path="/signUp/3" element={<SignUpThirdStage />} />
          </Route>
          <Route element={<ProtectedRoute requiredStep={3} />}>
            <Route path="/Dashboard" element={<Dashboard />}>
              <Route index element={<Greeting />} />
              <Route path="coach" element={<MyCoach />} />
              <Route path="membership" element={<Subscription />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
