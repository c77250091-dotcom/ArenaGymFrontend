import Stack from "@mui/material/Stack";
import "../CSS/Global.css";
import { useCoachStats } from "../Stats";
import CoashCard from "./CoachCard";

export default function MyCoach() {
  const stats = useCoachStats();
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Stack direction="column" spacing={1}>
        <p className="stat-label">My Coach</p>
        <p style={{ fontSize: "14px" }} className="stat-label">
          Your personal trainer details
        </p>
      </Stack>
      <CoashCard
        Name={stats.coach}
        NM={stats.coach
          .split(" ")
          .map((el) => el.slice(0, 1))
          .join("")}
          Exp = {stats.Experience}
          Sessions = {stats.sessions}
          Description = {stats.description}
          Atchivments={stats.atchivments}
          Contact = {stats.contact}
      />
    </div>
  );
}
