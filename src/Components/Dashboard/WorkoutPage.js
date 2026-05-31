import Stack from "@mui/material/Stack";
import WorkoutPlan from "./WorkoutCard";

export default function WorkoutPlanPage() {
  return (
    <div
      style={{
        width: "100%",
        height:"100%",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "25px",
      }}
    >
      <Stack direction="column" spacing={1}>
        <p className="stat-label">Workout Plan</p>
        <p style={{ fontSize: "14px" }} className="stat-label">
          Your Custom PPL Plan
        </p>
      </Stack>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          padding: "20px",
          gap: "16px",
        }}
      >
        <WorkoutPlan />
      </div>
    </div>
  );
}
