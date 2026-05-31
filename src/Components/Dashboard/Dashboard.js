import "../CSS/Global.css";
import { Outlet } from "react-router-dom";
import Slider from "./Slider";

export default function Dashboard() {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex" }}>
      <Slider />
      <div style={{minHeight:"100vh" , flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
}
