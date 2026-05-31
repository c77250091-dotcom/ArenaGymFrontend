import Stack from "@mui/material/Stack";
import { CaloriesStats, MacrosPlanCard, MealPlan } from "./DietPlanCard";
import { useMacrosStats } from "../Stats";

export default function DietPlan() {
  const state = useMacrosStats();
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "25px",
      }}
    >
      <Stack direction="column" spacing={1}>
        <p className="stat-label">Diet Plan</p>
        <p style={{ fontSize: "14px" }} className="stat-label">
          Your Custom Diet Plan
        </p>
      </Stack>
      <div
        style={{
          gridTemplateColumns: "repeat(2,470px)",
          padding: "0",
          gap: "10px",
        }}
        className="grid"
      >
        <MacrosPlanCard />
        <CaloriesStats Message={state.Message} />
        <MealPlan />
      </div>
    </div>
  );
}
