import Stack from "@mui/material/Stack";
import MemberShipCard from "./MemberShipCard";
import { useMemberShipStats } from "../Stats";

export default function Subscription() {
  const stats = useMemberShipStats();
  return (
      <MemberShipCard
        Name={stats.MemberShipName}
        Price={stats.Price}
        Atchivments={stats.Obtain}
      />
  );
}
