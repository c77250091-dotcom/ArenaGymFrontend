import Stack from "@mui/material/Stack";

export default function Options({label , icon , isSelect , onClick}) {
  return (
    <Stack className = {`Option ${isSelect ? "active" : ""}`}
      style={{ justifyContent:"center" , padding:"8px" , width: "100%", transition:"0.3s"  ,marginTop:"10px"}}
      direction="column"
      spacing={2}
      onClick ={onClick}
    >
      <Stack style={{ marginLeft: "30px" ,alignItems:"center" }} direction="row" spacing={2}>
        <span  className="Option-icon" style={{color: "rgb(216, 149, 149)", transition:"0.3s" }}>
            {icon}
        </span>
        <p
          style={{
            letterSpacing: "4px",
            color: "rgb(216, 149, 149)",
            textShadow: "0 0 0 ",
            fontSize: "13px",
            transition:"0.3s"
          }}
        >
          {label}
        </p>
      </Stack>
    </Stack>
  );
}
