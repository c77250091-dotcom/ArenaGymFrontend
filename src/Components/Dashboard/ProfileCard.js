import Stack from "@mui/material/Stack";
import "../CSS/Global.css";

export default function ProfileCard({
  NM,
  Name,
  FitnessLevel,
  Coach,
  Membership,
  Age,
}) {
  const rows = [
    {id : 1 ,  key: "Age", value: Age + " yrs", red: true },
    { id : 2 , key: "Fitness Level", value: FitnessLevel, red: true },
    { id : 3 , key: "Coach", value: Coach, red: true },
    {  id : 4 , key: "Membership", value: Membership, red: true },
  ];
  return (
    <div className="profile-card">
      <p className="stat-label">Member profile</p>
      <Stack
        style={{ alignItems: "center", marginTop: "15px" }}
        direction="row"
        spacing={2}
      >
        <span
          style={{
            width: "40px",
            height: "40px",
            border: "3px rgb(229, 8, 8) solid",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ fontSize: "12px" }}>{NM.toUpperCase()}</p>
        </span>
        <p>{Name}</p>
      </Stack>
      {
        rows.map((el) => (
            <div key={el.id} style={{marginTop:"15px",height:"100%",width:"100%",display:"flex",flexDirection:"center",justifyContent:"space-between"}}>
            <Stack direction= "row"  style={{width:"100%", justifyContent:"space-between",alignItems:"center",borderBottom:"2px rgba(108, 7, 7, 0.74) solid"}}>
                <p>{el.key}</p>
                <p className= {el.red ? "red" : ""}>{el.value}</p>
            </Stack>
            </div>
        ))
      }
    </div>
  );
}
