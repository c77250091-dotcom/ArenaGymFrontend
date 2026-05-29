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
  const TDEE =
    LevelOfFitness === "Beginner"
      ? (BMR * 1.375).toFixed(1)
      : LevelOfFitness === "Intermediate"
        ? (BMR * 1.55).toFixed(1)
        : LevelOfFitness === "Advanced"
          ? (BMR * 1.725).toFixed(1)
          : "";
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
  const FirstName = useSelector((state) => state.data.signUp.FirstName)
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
  return{
    FirstName,
      Name: Name.split(" ")
        .map((el) => el[0].toUpperCase() + el.slice(1))
        .join(" "),
    NM,
     Age,
     LevelOfFitness,
     Coach,
      MemberShip: MemberShip.split("(")[0],
    }

};

export const useBodyStats = () => {
  const Height = useSelector((state) => state.data.signUPstage2["Height(cm)"]);
  const Weight = useSelector((state) => state.data.signUPstage2["Weight(kg)"]);
  const Waist = useSelector((state) => state.data.signUPstage2["Waist(cm)"]);
  const Neck = useSelector((state) => state.data.signUPstage2["Neck(cm)"]);
  const BodyFats = (
  495 / (
    1.0324 -
    0.19077 * Math.log10(Waist - Neck) +
    0.15456 * Math.log10(Height)
  ) - 450
).toFixed(1);
  return {
    Height,
    Weight,
    Waist,
    Neck,
    BodyFats,
  }
};


export const useCoachStats = () =>{
  const Coach = useSelector((state) => state.data.signUPstage3["Choose Coach"]);
  const ChosenCoach = Trainer.find((el) => el.coach === Coach)
  return ChosenCoach
}

export const useMemberShipStats = () =>{
  const Subscription = useSelector((state) => state.data.signUPstage3["Choose MemberShip"])
  const Sub = Subscription.split("(")[0]
  const ChosenMemberShip = Ships.find((el) => el.MemberShipName === Sub)
  return  ChosenMemberShip
}