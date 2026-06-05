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
      <header className="coach-header">
        <Stack style={{ alignItems: "center" }} direction="column" spacing={1}>
          <span className="coach-name">
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
          <p className="stars">★★★★★</p>
        </Stack>
      </header>
      <div className="Atchivments">
        <Stack className="experience" direction={"row"}>
          <p>Experience</p>
          <p className="red">{Experience}</p>
        </Stack>
        <Stack className="sessions" direction={"row"}>
          <p>Sessions</p>
          <p className="red">{sessions}</p>
        </Stack>
        <Stack className="contact" direction={"row"}>
          <p>Contact</p>
          <p className="red">{contact}</p>
        </Stack>
        <Stack direction="row" spacing={1}>
          {Object.values(atchivments).map((item, index) => (
            <span className="info-atchivments" key={index}>
              {item}
            </span>
          ))}
        </Stack>
      </div>
    </div>
  );
}
