import Stack from "@mui/material/Stack";
import "../CSS/Global.css";
import { useCoachStats } from "../Stats";
import CoashCard from "./CoachCard";

export default function MyCoach() {
  const stats = useCoachStats();
  return (
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
  );
}
