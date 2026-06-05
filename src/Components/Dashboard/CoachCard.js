import Stack from "@mui/material/Stack";

export default function CoashCard({
  Name,
  NM,
  Sessions,
  Exp,
  Description,
  Atchivments,
  Contact,
}) {
  const rows = [
    { id: 1, key: "Specialization", value: Description },
    { id: 2, key: "Experience", value: Exp },
    { id: 3, key: "Sessions completed", value: Sessions },
    { id: 4, key: "Contact", value: Contact },
  ];
  const rows2 = [
    { id: 1, value: Atchivments.one },
    { id: 2, value: Atchivments.two },
    { id: 3, value: Atchivments.three },
  ];
  return (
    <div style={{ gridColumn: "span 4" }} className="Coach-card">
      <p style={{ fontSize: "14px" }} className="stat-label">
        Coach Profile
      </p>
      <Stack style={{ alignItems: "center" }} direction="row" spacing={1}>
        <span className="coach-name">
          <p style={{ fontSize: "20px" }}>{NM}</p>
        </span>
        <Stack direction="column" spacing={1}>
          <span>
            <p>{Name}</p>
            <p
              style={{ fontSize: "12px", color: "grey" }}
            >{`${Description} . ${Exp}`}</p>
          </span>
          <span style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <p>{Sessions} sessions</p>
            <p style={{ color: "yellow" }}>★★★★★</p>
          </span>
        </Stack>
      </Stack>
      {rows.map((el) => (
        <Stack
          key={el.id}
          style={{
            padding: "10px",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px rgba(108, 7, 7, 0.74) solid",
          }}
          direction="row"
        >
          <p>{el.key}</p>
          <p className="red">{el.value}</p>
        </Stack>
      ))}
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {rows2.map((el) => (
          <span className="info-atchivments" key={el.id}>
            {el.value}
          </span>
        ))}
      </div>
    </div>
  );
}
