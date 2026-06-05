import Stack from "@mui/material/Stack";
import { CaloriesStats, MacrosPlanCard, MealPlan } from "./DietPlanCard";
import { useMacrosStats } from "../Stats";

export default function DietPlan() {
  const state = useMacrosStats();
  return (
    <>
      <MacrosPlanCard />
      <CaloriesStats Message={state.Message} />
      <MealPlan />
    </>
  );
}
