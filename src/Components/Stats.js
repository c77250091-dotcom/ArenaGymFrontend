import { useSelector } from "react-redux";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import MonitorWeightIcon from "@mui/icons-material/MonitorWeight";
import ScaleIcon from "@mui/icons-material/Scale";
import LineWeightTwoToneIcon from "@mui/icons-material/LineWeightTwoTone";
import { Trainer } from "./Coaches/Coaches";
import { Ships } from "./MemberShip/MemberShips";

export const useBasicStats = () => {
  const Name = useSelector((state) => {
    return `${state.data.signUp.FirstName} ${state.data.signUp.SecondName}`;
  });
  let Goal = useSelector((state) => state.data.signUPstage3.Goal);
  const NM = Name.split(" ")
    .map((el) => el.slice(0, 1))
    .join("");
  const PeriodOfSubscription = useSelector(
    (state) => state.data.signUPstage3.Months,
  );
  const Age = useSelector((state) => state.data.signUp.YourAge);
  const Weight = useSelector((state) => state.data.signUPstage2["Weight(kg)"]);
  const Height = useSelector((state) => state.data.signUPstage2["Height(cm)"]);
  const Fitness = useSelector((state) => state.data.signUPstage2.FitnessLevel);
  const LevelOfFitness = Fitness.match(/\(([^)]+)\)/)?.[1];
  const BMR = 10 * Weight + 6.25 * Height - 5 * Age + 5;
  const calories =
    LevelOfFitness === "Beginner"
      ? (BMR * 1.375).toFixed(0)
      : LevelOfFitness === "Intermediate"
        ? (BMR * 1.55).toFixed(0)
        : LevelOfFitness === "Advanced"
          ? (BMR * 1.725).toFixed(0)
          : "";
  const TDEE =
    Goal === "Lose Fat"
      ? +calories - 500
      : Goal === "Bulk"
        ? +calories + 1000
        : +calories;
  const BMICalc = (Weight / (Height * 10 ** -2) ** 2).toFixed(1);
  const BMI =
    BMICalc < 18.5
      ? "Under The Normal Range"
      : BMICalc > 30
        ? "Above The Normal Range"
        : "Normal Range";

  return [
    {
      id: 1,
      label: "Subscription",
      value: PeriodOfSubscription,
      red: false,
      icon: <SubscriptionsIcon />,
    },
    {
      id: 2,
      label: "BMR",
      value: `${TDEE} Cal`,
      red: false,
      icon: <MonitorWeightIcon />,
    },
    {
      id: 3,
      label: "Current Weight",
      value: Weight,
      unit: "kg",
      red: false,
      icon: <ScaleIcon />,
    },
    {
      id: 4,
      label: "BMI",
      value: BMICalc,
      sub: BMI,
      red: BMI !== "Normal Range" ? true : false,
      icon: <LineWeightTwoToneIcon />,
    },
  ];
};

export const useProfileStats = () => {
  const FirstName = useSelector((state) => state.data.signUp.FirstName);
  const Name = useSelector((state) => {
    return `${state.data.signUp.FirstName} ${state.data.signUp.SecondName}`;
  });
  const NM = Name.split(" ")
    .map((el) => el.slice(0, 1))
    .join("");
  const Age = useSelector((state) => state.data.signUp.YourAge);
  const Fitness = useSelector((state) => state.data.signUPstage2.FitnessLevel);
  const LevelOfFitness = Fitness.match(/\(([^)]+)\)/)?.[1];
  const Coach = useSelector((state) => state.data.signUPstage3["Choose Coach"]);
  const MemberShip = useSelector(
    (state) => state.data.signUPstage3["Choose MemberShip"],
  );
  return {
    FirstName,
    Name: Name.split(" ")
      .map((el) => el[0].toUpperCase() + el.slice(1))
      .join(" "),
    NM,
    Age,
    LevelOfFitness,
    Coach,
    MemberShip: MemberShip.split("(")[0],
  };
};

export const useBodyStats = () => {
  const Height = useSelector((state) => state.data.signUPstage2["Height(cm)"]);
  const Weight = useSelector((state) => state.data.signUPstage2["Weight(kg)"]);
  const Waist = useSelector((state) => state.data.signUPstage2["Waist(cm)"]);
  const Neck = useSelector((state) => state.data.signUPstage2["Neck(cm)"]);
  const BodyFats = (
    495 /
      (1.0324 -
        0.19077 * Math.log10(Waist - Neck) +
        0.15456 * Math.log10(Height)) -
    450
  ).toFixed(1);
  return {
    Height,
    Weight,
    Waist,
    Neck,
    BodyFats,
  };
};

export const useCoachStats = () => {
  const Coach = useSelector((state) => state.data.signUPstage3["Choose Coach"]);
  const ChosenCoach = Trainer.find((el) => el.coach === Coach);
  return ChosenCoach;
};

export const useMemberShipStats = () => {
  const Subscription = useSelector(
    (state) => state.data.signUPstage3["Choose MemberShip"],
  );
  const Sub = Subscription.split("(")[0];
  const ChosenMemberShip = Ships.find((el) => el.MemberShipName === Sub);
  return ChosenMemberShip;
};

export const useMacrosStats = () => {
  const Age = useSelector((state) => state.data.signUp.YourAge);
  const Weight = useSelector((state) => state.data.signUPstage2["Weight(kg)"]);
  const Height = useSelector((state) => state.data.signUPstage2["Height(cm)"]);
  let Goal = useSelector((state) => state.data.signUPstage3.Goal);
  const Fitness = useSelector((state) => state.data.signUPstage2.FitnessLevel);
  const LevelOfFitness = Fitness.match(/\(([^)]+)\)/)?.[1];
  const BMR = 10 * Weight + 6.25 * Height - 5 * Age + 5;
  const calories =
    LevelOfFitness === "Beginner"
      ? (BMR * 1.375).toFixed(0)
      : LevelOfFitness === "Intermediate"
        ? (BMR * 1.55).toFixed(0)
        : LevelOfFitness === "Advanced"
          ? (BMR * 1.725).toFixed(0)
          : "";
  const TDEE =
    Goal === "Lose Fat"
      ? +calories - 500
      : Goal === "Bulk"
        ? +calories + 1000
        : +calories;
  const ProteinPercentage =
    Goal === "Lose Fat" ? 0.35 : Goal === "Bulk" ? 0.3 : 0.25;

  const CarbsPercentage =
    Goal === "Lose Fat" ? 0.4 : Goal === "Bulk" ? 0.45 : 0.5;

  const FatPercentage =
    Goal === "Lose Fat" ? 0.25 : Goal === "Bulk" ? 0.25 : 0.25;

  const ProteinGrams = Math.round((TDEE * ProteinPercentage) / 4);
  const CarbsGrams = Math.round((TDEE * CarbsPercentage) / 4);
  const FatGrams = Math.round((TDEE * FatPercentage) / 9);
  const Message =
    Goal === "Lose Fat"
      ? "Calorie surplus for Body Fats Lose"
      : Goal === "Bulk"
        ? "Calorie surplus for lean mass gain phase"
        : "Calorie surplus To Constant Weight";
  const WaterIntake =
    Weight * 0.033 +
    (LevelOfFitness === "Beginner"
      ? 0.3
      : LevelOfFitness === "Intermediate"
        ? 0.5
        : LevelOfFitness === "Advanced"
          ? 0.7
          : 0) +
    (Goal === "Bulk" ? 0.3 : 0);

  return {
    Message,
    BMR,
    Height,
    Weight,
    TDEE,
    ProteinPercentage,
    CarbsPercentage,
    ProteinGrams,
    CarbsGrams,
    FatGrams,
    WaterIntake: WaterIntake.toFixed(1),
    FatPercentage,
  };
};
