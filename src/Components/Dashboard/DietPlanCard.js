import Stack from "@mui/material/Stack";
import { useMacrosStats } from "../Stats";

export function MacrosPlanCard() {
  const state = useMacrosStats();
  const rows = [
    { id: 1, key: "Calories", value: state.TDEE + "cal", red: true },
    { id: 2, key: "Protein", value: state.ProteinGrams + "grams", red: true },
    { id: 3, key: "Carbs", value: state.CarbsGrams + "grams", red: true },
    { id: 4, key: "Fats", value: state.FatGrams + "grams", red: true },
    { id: 5, key: "Water", value: state.WaterIntake + "L", red: true },
  ];
  const rows2 = [
    { id: 1, value: state.ProteinPercentage, key: "protein", blue: true },
    { id: 2, value: state.CarbsPercentage, key: "Carb", yellow: true },
    { id: 3, value: state.FatPercentage, key: "Fats", red: true },
  ];
  return (
    <div style={{ gridColumn: "span 2" }} className="macros-card">
      <p className="stat-label">Daily targets</p>
      {rows.map((el) => (
        <Stack
          key={el.id}
          style={{
            padding: "10px",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px rgba(108, 7, 7, 0.74) solid",
          }}
          direction="row"
        >
          <p>{el.key}</p>
          <p className="red">{el.value}</p>
        </Stack>
      ))}
      <Stack
        direction="row"
        style={{
          width: "100%",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        spacing={3}
      >
        {rows2.map((el) => (
          <p
            className="dietPlan-food"
            style={{
              color: el.yellow
                ? "yellow"
                : el.blue
                  ? "rgb(55, 15, 214)"
                  : "red",
            }}
            key={el.id}
          >
            {el.value * 100}%<span style={{ color: "grey" }}>{el.key}</span>
          </p>
        ))}
      </Stack>
    </div>
  );
}

export function CaloriesStats({ Message }) {
  const state = useMacrosStats();
  const rows = [
    { id: 1, key: "Weight", value: state.Weight + "kg", red: true },
    { id: 2, key: "Height", value: state.Height + "cm", red: true },
    { id: 3, key: "BMR", value: state.BMR.toFixed(0) + " " + "cal", red: true },
    { id: 4, key: "TDEE", value: state.TDEE + " " + "cal", red: true },
  ];
  return (
    <div style={{ gridColumn: "span 2" }} className="macros-card">
      <p className="stat-label">Calculated From</p>
      {rows.map((el) => (
        <Stack
          key={el.id}
          style={{
            padding: "10px",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px rgba(108, 7, 7, 0.74) solid",
          }}
          direction="row"
        >
          <p>{el.key}</p>
          <p className="red">{el.value}</p>
        </Stack>
      ))}
      <Stack
        direction="row"
        style={{
          width: "100%",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        spacing={3}
      >
        <p
          style={{
            color:
              Message === "Calorie surplus for lean mass gain phase"
                ? "red"
                : "green",
          }}
        >
          {Message}
        </p>
      </Stack>
    </div>
  );
}

const meals = {
  breakfast: {
    calories: 25,
    foods: [
      { id: 1, name: "Oats", calories: 389, protein: 17, carbs: 66, fats: 7 },
      { id: 2, name: "Eggs", calories: 155, protein: 13, carbs: 1, fats: 11 },
      { id: 3, name: "Banana", calories: 89, protein: 1, carbs: 23, fats: 0 },
      {
        id: 4,
        name: "Greek Yogurt",
        calories: 59,
        protein: 10,
        carbs: 4,
        fats: 0,
      },
      { id: 5, name: "Avocado", calories: 160, protein: 2, carbs: 9, fats: 15 },
    ],
  },
  lunch: {
    calories: 40,
    foods: [
      {
        id: 1,
        name: "Chicken Breast",
        calories: 165,
        protein: 31,
        carbs: 0,
        fats: 4,
      },
      {
        id: 2,
        name: "Brown Rice",
        calories: 216,
        protein: 5,
        carbs: 45,
        fats: 2,
      },
      { id: 3, name: "Broccoli", calories: 55, protein: 4, carbs: 11, fats: 1 },
      {
        id: 4,
        name: "Sweet Potato",
        calories: 86,
        protein: 2,
        carbs: 20,
        fats: 0,
      },
      { id: 5, name: "Tuna", calories: 132, protein: 28, carbs: 0, fats: 1 },
    ],
  },
  dinner: {
    calories: 35,
    foods: [
      { id: 1, name: "Salmon", calories: 208, protein: 20, carbs: 0, fats: 13 },
      { id: 2, name: "Quinoa", calories: 120, protein: 4, carbs: 22, fats: 2 },
      { id: 3, name: "Spinach", calories: 23, protein: 3, carbs: 4, fats: 0 },
      {
        id: 4,
        name: "Turkey Breast",
        calories: 135,
        protein: 30,
        carbs: 0,
        fats: 1,
      },
      { id: 5, name: "Asparagus", calories: 20, protein: 2, carbs: 4, fats: 0 },
    ],
  },
};

function MealCard({ title, percentage, foods }) {
  const macros = [
    { id: 1, value: "Protein", key: "protein", blue: true },
    { id: 2, value: "Carbs", key: "carb", yellow: true },
    { id: 3, value: "Fats", key: "fats", red: true },
  ];

  return (
    <div
      style={{ gridColumn: "span 4", padding: "20px" }}
      className="macros-card"
    >
      <Stack
        direction="row"
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <p className="stat-label">{title}</p>
        <p className="red" style={{ paddingRight: "10px", fontSize: "13px" }}>
          {percentage}% of daily calories
        </p>
      </Stack>

      {foods.map((food) => (
        <Stack
          key={food.id}
          style={{
            padding: "10px",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px rgba(108, 7, 7, 0.74) solid",
          }}
          direction="row"
        >
          <p>{food.name}</p>
          <p className="red">{food.calories} cal</p>
        </Stack>
      ))}

      <Stack
        direction="row"
        style={{
          width: "100%",
          justifyContent: "space-around",
          alignItems: "center",
          paddingTop: "10px",
        }}
        spacing={3}
      >
        {macros.map((el) => (
          <p
            className="dietPlan-food"
            key={el.id}
            style={{
              color: el.yellow
                ? "yellow"
                : el.blue
                  ? "rgb(55, 15, 214)"
                  : "red",
            }}
          >
            {el.value}
            <span style={{ color: "grey" }}>{el.key}</span>
          </p>
        ))}
      </Stack>
    </div>
  );
}

export function MealPlan() {
  return (
    <>
      <MealCard
        title="Breakfast"
        percentage={meals.breakfast.calories}
        foods={meals.breakfast.foods}
      />
      <MealCard
        title="Lunch"
        percentage={meals.lunch.calories}
        foods={meals.lunch.foods}
      />
      <MealCard
        title="Dinner"
        percentage={meals.dinner.calories}
        foods={meals.dinner.foods}
      />
    </>
  );
}
