import Stack from "@mui/material/Stack";
import "../CSS/Global.css";
import BMIBar from "./ProgressBar";
export default function BodyStats({
  Height,
  Weight,
  Waist,
  Neck,
  BodyFats,
  BMI,
}) {
  const rows = [
    { id: 1, key: "Height", value: Height + "cm", red: true },
    { id: 2, key: "Weight", value: Weight + "kg", red: true },
    { id: 3, key: "Waist", value: Waist + "cm", red: true },
    { id: 4, key: "Neck", value: Neck + "cm", red: true },
    { id: 5, key: "BodyFats", value: BodyFats + "%", red: true },
  ];
  return (
    <div className="BodyStats-card">
      <p className="stat-label">Body Stats</p>
      {rows.map((el) => (
        <Stack key={el.id}
          style={{
            width: "100%",
            justifyContent: "space-between",
            borderBottom: "2px rgba(108, 7, 7, 0.74) solid",
            padding: "10px",
          }}
          direction="row"
        >
          <p>{el.key}</p>
          <p className="red">{el.value}</p>
        </Stack>
      ))}
    <BMIBar Weight={Weight} Height={Height} />
    </div>
  );
}
