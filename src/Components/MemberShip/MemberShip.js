import Stack from "@mui/material/Stack";
import "../CSS/Global.css";
import CheckIcon from "@mui/icons-material/Check";

export default function MemberShip({ MemberShipName, Price, Obtain }) {
  return (
    <div className="MemberShip">
      <header
        style={{
          width: "100%",
          height: "40%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack style={{ alignItems: "center" }} direction="column" spacing={3}>
          <span
            style={{
              width: "70px",
              height: "70px",
              border: "3px rgb(229, 8, 8) solid",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              
            }}
          >
            <p style={{ fontSize: "35px" }}>{MemberShipName.slice(0, 2)}</p>
          </span>
          <p style={{ fontSize: "24px", letterSpacing: "8px" }}>
            {MemberShipName}
          </p>
        </Stack>
      </header>
      <div className="Atchivments">
        <p>
          <span style={{ color: "#da0909", textShadow: "0 0 0 " }}>$</span>
          <span style={{ fontSize: "30px" }}>{Price}</span>
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
        <Stack
          style={{ alignItems: "flex-start" }}
          direction="column"
          spacing={1}
        >
          {Object.values(Obtain).map((item, index) => (
            <Stack style={{ alignItems: "center" }} direction="row" spacing={2}>
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
              <p key={index}>{item}</p>
            </Stack>
          ))}
        </Stack>
      </div>
    </div>
  );
}
