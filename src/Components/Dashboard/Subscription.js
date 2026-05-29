import Stack from "@mui/material/Stack";
import MemberShipCard from "./MemberShipCard";
import { useMemberShipStats } from "../Stats";

export default function Subscription() {
    const stats = useMemberShipStats()
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <Stack direction="column" spacing={1}>
        <p className="stat-label">Membership</p>
        <p style={{ fontSize: "14px" }} className="stat-label">
          Your current plan & benefits
        </p>
      </Stack>
      <MemberShipCard Name = {stats.MemberShipName}Price={stats.Price} Atchivments ={stats.Obtain}/>
    </div>
  );
}
