import Stack from "@mui/material/Stack";
import CheckIcon from "@mui/icons-material/Check";

export default function MemberShipCard({ Name, Price, Atchivments }) {
  const rows = [
    { id: 1, value: Atchivments.one },
    { id: 2, value: Atchivments.two },
    { id: 3, value: Atchivments.three },
    { id: 4, value: Atchivments.four },
    { id: 5, value: Atchivments.five },
  ];
  return (
    <div className="Membership-card">
      <Stack style={{ alignItems: "center" }} direction="column" spacing={2}>
        <span
          style={{
            width: "60px",
            height: "60px",
            border: "3px rgb(229, 8, 8) solid",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p style={{ fontSize: "20px" }}>{Name.slice(0, 2)}</p>
        </span>
        <p style={{ letterSpacing: "5px", color: "red" }}>{Name}</p>
        <p>
          <span style={{ color: "#da0909", textShadow: "0 0 0 " }}>$</span>
          <span style={{ fontSize: "20px" }}>{Price}</span>
          <span
            style={{
              fontSize: "10px",
              color: "rgb(159, 143, 143)",
              textShadow: "0 0 0 ",
            }}
          >
            /MONTH
          </span>
        </p>
      </Stack>
            <div style={{display:"flex" ,flexDirection:"column",gap:"10px"}}>
      {rows.map((el) => (
        <Stack key={el.id} style={{ alignItems: "center" }} direction="row" spacing={2}>
          <span
            style={{
              width: "25px",
              height: "25px",
              borderRadius: "50%",
              border: "2px solid #ae0c0c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CheckIcon style={{ fontSize: "18px", color: "red" }} />
          </span>
          <p>{el.value}</p>
        </Stack>
      ))}
      </div>
    </div>
  );
}
