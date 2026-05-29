import Stack from "@mui/material/Stack";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";


function Header() {
  return (
    <div className="header">
      <Stack
        style={{ alignItems: "center", padding: "10px" }}
        direction="row"
        spacing={1}
      >
        <h2
          style={{
            color: "#ffe6e6",
            textShadow: "1px 0px 10px red",
            letterSpacing: "2px",
          }}
        >
          ArenaGym
        </h2>
        <FitnessCenterIcon className="icon" />
      </Stack>
      <p>It never gets easier, you just get stronger.</p>
    </div>
  );
}

export default Header