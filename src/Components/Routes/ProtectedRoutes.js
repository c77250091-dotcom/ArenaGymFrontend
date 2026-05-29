import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function Protected({ requiredStep }) {
  const step = useSelector((state) => state.data.step);
  return step  >= requiredStep  ? <Outlet /> : <Navigate to="/" />;
}
