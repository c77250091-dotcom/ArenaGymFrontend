import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import "../CSS/Global.css";

export default function BMIBar({ Weight, Height }) {
  const BMICalc = (Weight / (Height / 100) ** 2).toFixed(1);
  const BMIProgress = Math.min((BMICalc / 40) * 100, 100);
  const BMIStatus =
    BMICalc < 18.5 ? "Under" : BMICalc > 30 ? "Obese" : "Normal";
  return (
    <div style={{ padding:" 0 10px 0 10px",marginTop: "10px" }}>
      <Stack
        direction="row"
        style={{ justifyContent: "space-between", marginBottom: "4px" }}
      >
        <p className="info-key">BMI {BMICalc}</p>
        <p style={{color : BMIStatus !== "Normal" ? "red" : "green" }} className="info-key">{BMIStatus}</p>
      </Stack>
      <LinearProgress
        variant="determinate"
        value={BMIProgress}
        sx={{
          height: "8px",
          borderRadius: "4px",
          backgroundColor: "#390404",
          "& .MuiLinearProgress-bar": {
            borderRadius: "4px",
            backgroundImage:
              "linear-gradient(90deg, #155715, #765410, #960c0c)", 
            backgroundColor: "unset",
          },
        }}
      />
    </div>
  );
}
