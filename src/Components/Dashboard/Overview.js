import { useBasicStats, useProfileStats, useBodyStats } from "../Stats";
import BodyStats from "./BodyStats";
import ProfileCard from "./ProfileCard";
import StatCard from "./StatsCard";

export default function Overview() {
  const BasicStats = useBasicStats();
  const ProfileStats = useProfileStats();
  const Body= useBodyStats();

  return (
    <>
      {BasicStats.map((s) => (
        <StatCard
          key={s.id}
          label={s.label}
          icon={s.icon}
          value={s.value}
          unit={s.unit}
          red={s.red}
          sub={s.sub}
        />
      ))}
      <ProfileCard
        Name={ProfileStats.Name}
        NM={ProfileStats.NM}
        FitnessLevel={ProfileStats.LevelOfFitness}
        Coach={ProfileStats.Coach}
        Membership={ProfileStats.MemberShip}
        Age={ProfileStats.Age}
      />
      <BodyStats
        Height={Body.Height}
        Weight={Body.Weight}
        Waist={Body.Waist}
        Neck={Body.Neck}
        BodyFats={Body.BodyFats}
      />
    </>
  );
}
