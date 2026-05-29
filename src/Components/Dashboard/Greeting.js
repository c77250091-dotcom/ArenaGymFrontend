import moment from "moment/moment";
import { useState, useEffect } from "react";
import Overview from "./Overview";
import { useProfileStats } from "../Stats";

export default function Greeting() {
  const state = useProfileStats()
  const [date, setDate] = useState("");
  useEffect(() => {
    setDate(moment().format("dddd, Do MMMM YYYY"));
  }, []);
  return (
    <div
      style={{
        height: "100%",
        flex: "1",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="Greeting">
        <p>
          Welcome, <span>{state.FirstName.toUpperCase()}</span>
        </p>
        <p
          style={{
            color: "rgb(165, 142, 142)",
            fontSize: "10px",
            textShadow: "0 0 0",
          }}
        >
          {date}
        </p>
      </div>
      <div className="grid">
        <Overview />
      </div>
    </div>
  );
}
