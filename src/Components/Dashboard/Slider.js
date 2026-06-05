import "../CSS/Global.css";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NoFoodIcon from "@mui/icons-material/NoFood";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import Options from "./Options";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logout } from "../../Slices/RegisterSlice";
import { persistor } from "../../Center/store";
import { useLocation } from "react-router-dom";

export const options = [
  {
    id: 1,
    to: "/Dashboard",
    label: "Overview",
    icon: <DashboardIcon className="Option-icon" />,
  },
  {
    id: 2,
    to: "/Dashboard/workout",
    label: "Workout Plan",
    icon: <FitnessCenterIcon className="Option-icon" />,
  },
  {
    id: 3,
    to: "/Dashboard/diet",
    label: "Diet Plan",
    icon: <NoFoodIcon className="Option-icon" />,
  },
  {
    id: 4,
    to: "/Dashboard/coach",
    label: "My Coach",
    icon: <PersonIcon className="Option-icon" />,
  },
  {
    id: 5,
    to: "/Dashboard/membership",
    label: "Membership",
    icon: <StarIcon className="Option-icon" />,
  },
];

export default function Slider() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  function handleLogout() {
    dispatch(logout());
    persistor.purge();
    navigate("/");
  }
  return (
    <div className="slider">
      <div className="DashBoard-header">
        <h2
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "5px",
          }}
        >
          Arena Gym
          <FitnessCenterIcon className="icon" />
        </h2>
        <p
          style={{
            letterSpacing: "1px",
            fontSize: "10px",
            color: "rgb(165, 142, 142)",
            textShadow: "0 0 0 ",
          }}
        >
          It never gets easier, you just get stronger.
        </p>
      </div>

      {options.map((el) => (
        <Options
          key={el.id}
          label={el.label}
          icon={el.icon}
          isSelect={location.pathname === el.to}
          onClick={() => {
            navigate(el.to);
          }}
        />
      ))}
      <button
        style={{
          position: "absolute",
          cursor: "pointer",
          transform: "translate(-50%,-90%)",
          top: "90%",
          left: "50%",
          width: "200px",
        }}
        onClick={handleLogout}
      >
        Log out
      </button>
    </div>
  );
}
