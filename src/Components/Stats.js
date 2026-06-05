import { useSelector } from "react-redux";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import MonitorWeightIcon from "@mui/icons-material/MonitorWeight";
import ScaleIcon from "@mui/icons-material/Scale";
import LineWeightTwoToneIcon from "@mui/icons-material/LineWeightTwoTone";
import { Trainer } from "./Coaches/Coaches";
import { Ships } from "./MemberShip/MemberShips";
import { options } from "./Dashboard/Slider";
import { useLocation } from "react-router";
import { useMemo } from "react";



const useTDEE = () => {
  const Goal = useSelector((state) => state.data.signUPstage3.Goal);
  const Age = useSelector((state) => state.data.signUp.YourAge);
  const Weight = useSelector((state) => state.data.signUPstage2["Weight(kg)"]);
  const Height = useSelector((state) => state.data.signUPstage2["Height(cm)"]);
  const Fitness = useSelector((state) => state.data.signUPstage2.FitnessLevel);
  const LevelOfFitness = Fitness.match(/\(([^)]+)\)/)?.[1];

  const { BMR, calories, TDEE } = useMemo(() => {
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
    return { BMR, calories, TDEE };
  }, [Age, Weight, Height, Goal, LevelOfFitness]);

  return { Age, Weight, Height, Fitness, Goal, LevelOfFitness, TDEE, BMR, calories };
};

export const useBasicStats = () => {
  const state = useTDEE();
  const PeriodOfSubscription = useSelector(
    (state) => state.data.signUPstage3.Months,
  );
  const BMICalc = (state.Weight / (state.Height * 10 ** -2) ** 2).toFixed(1);
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
      label: "TDEE",
      value: `${state.TDEE} Cal`,
      red: false,
      icon: <MonitorWeightIcon />,
    },
    {
      id: 3,
      label: "Current Weight",
      value: state.Weight,
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
  const state = useTDEE();
  const FirstName = useSelector((state) => state.data.signUp.FirstName);
  const Name = useSelector((state) => {
    return `${state.data.signUp.FirstName} ${state.data.signUp.SecondName}`;
  });
  const NM = Name.split(" ")
    .map((el) => el.slice(0, 1))
    .join("");
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
    Age: state.Age,
    LevelOfFitness: state.LevelOfFitness,
    Coach,
    MemberShip: MemberShip.split("(")[0],
  };
};

export const useBodyStats = () => {
  const state = useTDEE();
  const Waist = useSelector((state) => state.data.signUPstage2["Waist(cm)"]);
  const Neck = useSelector((state) => state.data.signUPstage2["Neck(cm)"]);
  const BodyFats = (
    495 /
      (1.0324 -
        0.19077 * Math.log10(Waist - Neck) +
        0.15456 * Math.log10(state.Height)) -
    450
  ).toFixed(1);
  return {
    Height: state.Height,
    Weight: state.Weight,
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
  const state = useTDEE();
  const ProteinPercentage =
    state.Goal === "Lose Fat" ? 0.35 : state.Goal === "Bulk" ? 0.3 : 0.25;

  const CarbsPercentage =
    state.Goal === "Lose Fat" ? 0.4 : state.Goal === "Bulk" ? 0.45 : 0.5;

  const FatPercentage =
    state.Goal === "Lose Fat" ? 0.25 : state.Goal === "Bulk" ? 0.25 : 0.25;

  const ProteinGrams = Math.round((state.TDEE * ProteinPercentage) / 4);
  const CarbsGrams = Math.round((state.TDEE * CarbsPercentage) / 4);
  const FatGrams = Math.round((state.TDEE * FatPercentage) / 9);
  const Message =
    state.Goal === "Lose Fat"
      ? "Calorie surplus for Body Fats Lose"
      : state.Goal === "Bulk"
        ? "Calorie surplus for lean mass gain phase"
        : "Calorie surplus To Constant Weight";
  const WaterIntake =
    state.Weight * 0.033 +
    (state.LevelOfFitness === "Beginner"
      ? 0.3
      : state.LevelOfFitness === "Intermediate"
        ? 0.5
        : state.LevelOfFitness === "Advanced"
          ? 0.7
          : 0) +
    (state.Goal === "Bulk" ? 0.3 : 0);

  return {
    Message,
    BMR: state.BMR,
    Height: state.Height,
    Weight: state.Weight,
    TDEE: state.TDEE,
    ProteinPercentage,
    CarbsPercentage,
    ProteinGrams,
    CarbsGrams,
    FatGrams,
    WaterIntake: WaterIntake.toFixed(1),
    FatPercentage,
  };
};

const Headers = [
  {
    id: 1,
    head: "Membership",
    title: "Membership",
    info: "Your current plan & benefits",
  },
  {
    id: 2,
    head: "Diet Plan",
    title: "Your Custom Diet Plan",
    info: "",
  },
  {
    id: 3,
    title: "My Coach",
    head: "My Coach",
    info: "Your personal trainer details",
  },
  {
    id: 4,
    head: "Workout Plan",
    title: "Your Custom PPL Plan",
  },
  {
    id: 5,
    head: "Overview",
    title: "",
  },
];

export const useHeaders = () => {
  const location = useLocation();
  const ChosenHeader = options.find((el) => el.to === location.pathname);
  const Header = Headers.find((el) => el.head === ChosenHeader.label);
  return Header;
};
