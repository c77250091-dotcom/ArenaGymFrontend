import Stack from "@mui/material/Stack";

export default function StatCard({ label, value, unit, sub, red, icon }) {
  return (
    <div className="stat-card">
      <Stack
        style={{
          alignItems: "center",
          marginLeft: "10px",
          whiteSpace: "nowrap",
        }}
        direction="row"
        spacing={1}
      >
        <span className="stat-label">{icon}</span>
        <p className="stat-label">{label}</p>
      </Stack>
      <Stack
        style={{
          alignItems: "flex-end",
          whiteSpace: "nowrap",
          justifyContent: "space-between",
        }}
        direction="row"
        spacing={1}
      >
        <h3 className="stat-value">
          {value}
          {unit && <span className="stat-unit">{unit}</span>}
        </h3>
        <p style={{ fontSize: "11px" }} className={red ? "red" : "stat-sub"}>
          {sub}
        </p>
      </Stack>
    </div>
  );
}
