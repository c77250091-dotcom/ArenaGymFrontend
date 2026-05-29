import Stack from "@mui/material/Stack";
import "../CSS/Global.css";

export default function Coach({
  Name,
  description,
  Experience,
  sessions,
  contact,
  atchivments,
}) {
  return (
    <div className="Coach">
      <header
        style={{
          width: "100%",
          height: "40%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "40px",
        }}
      >
        <Stack style={{ alignItems: "center" }} direction="column" spacing={1}>
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
            <p style={{ fontSize: "35px" }}>
              {Name.split(" ")
                .map((el) => el.slice(0, 1))
                .join("")}
            </p>
          </span>
          <Stack
            style={{ alignItems: "center" }}
            direction="column"
            spacing={0}
          >
            <p style={{ fontSize: "20px", letterSpacing: "1px" }}>{Name}</p>
            <p style={{ fontSize: "14px", letterSpacing: "2px" }}>
              {description}
            </p>
          </Stack>
          <p
            style={{ fontSize: "18px", color: "yellow", letterSpacing: "2px" }}
          >
            ★★★★★
          </p>
        </Stack>
      </header>
      <div
        className="Atchivments"
        style={{ marginTop: "40px", gap: "30px", padding: "20px" }}
      >
        <Stack
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <p>Experience</p>
          <p style={{ color: "#ff4d4d" }}>{Experience}</p>
        </Stack>
        <Stack
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <p>Sessions</p>
          <p style={{ color: "#ff4d4d" }}>{sessions}</p>
        </Stack>
        <Stack
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <p>Contact</p>
          <p style={{ color: "#ff4d4d" }}>{contact}</p>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          style={{
            alignItems: "center",
            width: "100%",
            justifyContent: "flex-start",
          }}
        >
          {Object.values(atchivments).map((item, index) => (
            <span
              style={{
                height: "25px",
                width: "70px",
                border: "1px solid red",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: "10px",
                background: "rgba(209, 29, 29, 0.2)",
                whiteSpace: "nowrap",
              }}
              key={index}
            >
              {item}
            </span>
          ))}
        </Stack>
      </div>
    </div>
  );
}
