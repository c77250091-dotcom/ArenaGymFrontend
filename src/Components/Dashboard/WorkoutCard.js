import Stack from "@mui/material/Stack";

const workoutDays = [
  {
    id: 1,
    day: "Monday",
    type: "Push",
    muscles: "Chest · Shoulders · Triceps",
    exercises: [
      { id: 1, name: "Bench Press",         sets: 4, reps: "8-10" },
      { id: 2, name: "Incline Dumbbell Press", sets: 3, reps: "10-12" },
      { id: 3, name: "Overhead Press",      sets: 4, reps: "8-10" },
      { id: 4, name: "Lateral Raises",      sets: 3, reps: "12-15" },
      { id: 5, name: "Tricep Pushdown",     sets: 3, reps: "12-15" },
    ],
  },
  {
    id: 2,
    day: "Tuesday",
    type: "Pull",
    muscles: "Back · Biceps",
    exercises: [
      { id: 1, name: "Deadlift",            sets: 4, reps: "6-8"  },
      { id: 2, name: "Pull Ups",            sets: 4, reps: "8-10" },
      { id: 3, name: "Barbell Row",         sets: 4, reps: "8-10" },
      { id: 4, name: "Face Pulls",          sets: 3, reps: "12-15" },
      { id: 5, name: "Barbell Curl",        sets: 3, reps: "10-12" },
    ],
  },
  {
    id: 3,
    day: "Wednesday",
    type: "Legs",
    muscles: "Quads · Hamstrings · Calves",
    exercises: [
      { id: 1, name: "Squat",               sets: 4, reps: "8-10" },
      { id: 2, name: "Romanian Deadlift",   sets: 4, reps: "10-12" },
      { id: 3, name: "Leg Press",           sets: 3, reps: "12-15" },
      { id: 4, name: "Leg Curl",            sets: 3, reps: "12-15" },
      { id: 5, name: "Calf Raises",         sets: 4, reps: "15-20" },
    ],
  },
  {
    id: 4,
    day: "Thursday",
    type: "Push",
    muscles: "Chest · Shoulders · Triceps",
    exercises: [
      { id: 1, name: "Dumbbell Press",      sets: 4, reps: "10-12" },
      { id: 2, name: "Cable Fly",           sets: 3, reps: "12-15" },
      { id: 3, name: "Arnold Press",        sets: 4, reps: "10-12" },
      { id: 4, name: "Front Raises",        sets: 3, reps: "12-15" },
      { id: 5, name: "Skull Crushers",      sets: 3, reps: "10-12" },
    ],
  },
  {
    id: 5,
    day: "Friday",
    type: "Pull",
    muscles: "Back · Biceps",
    exercises: [
      { id: 1, name: "Weighted Pull Ups",   sets: 4, reps: "6-8"  },
      { id: 2, name: "Seated Cable Row",    sets: 4, reps: "10-12" },
      { id: 3, name: "Lat Pulldown",        sets: 3, reps: "10-12" },
      { id: 4, name: "Hammer Curl",         sets: 3, reps: "10-12" },
      { id: 5, name: "Incline Dumbbell Curl", sets: 3, reps: "10-12" },
    ],
  },
  {
    id: 6,
    day: "Saturday",
    type: "Legs",
    muscles: "Quads · Hamstrings · Calves",
    exercises: [
      { id: 1, name: "Front Squat",         sets: 4, reps: "8-10" },
      { id: 2, name: "Walking Lunges",      sets: 3, reps: "12-15" },
      { id: 3, name: "Hack Squat",          sets: 3, reps: "10-12" },
      { id: 4, name: "Leg Extension",       sets: 3, reps: "12-15" },
      { id: 5, name: "Seated Calf Raises",  sets: 4, reps: "15-20" },
    ],
  },
];

function DayCard({ day, type, muscles, exercises }) {
  return (
    <div className="macros-card">
      <Stack
        direction="row"
        style={{ justifyContent: "space-between", alignItems: "center" }}
      >
        <p className="stat-label">{day}</p>
        <p className="red" style={{ paddingRight: "10px", fontSize: "13px" }}>
          {type}
        </p>
      </Stack>

      <p style={{ color: "grey", fontSize: "12px", padding: "0 10px" }}>
        {muscles}
      </p>

      <Stack
        direction="row"
        style={{
          padding: "10px",
          borderBottom: "1px rgba(108, 7, 7, 0.74) solid",
          justifyContent: "space-between",
        }}
      >
        <p style={{ color: "grey", fontSize: "12px" }}>Exercise</p>
        <p style={{ color: "grey", fontSize: "12px" }}>Sets × Reps</p>
      </Stack>

      {exercises.map((ex) => (
        <Stack
          key={ex.id}
          direction="row"
          style={{
            padding: "10px",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px rgba(108, 7, 7, 0.74) solid",
          }}
        >
          <p>{ex.name}</p>
          <p className="red">{ex.sets} × {ex.reps}</p>
        </Stack>
      ))}
    </div>
  );
}

export default function WorkoutPlan() {
  return (
    <>
      {workoutDays.map((day) => (
        <DayCard
          key={day.id}
          day={day.day}
          type={day.type}
          muscles={day.muscles}
          exercises={day.exercises}
        />
      ))}
      </>
  );
}