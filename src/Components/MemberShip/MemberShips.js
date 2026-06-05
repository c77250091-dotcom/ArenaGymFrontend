import MemberShip from "./MemberShip";

export const Ships = [
  {
    id: 1,
    MemberShipName: "SLIVER",
    Price: "15",
    Obtain: {
      one: "Full gym floor access",
      two: "Cardio & Weight zones",
      three: "Locker rooms & showers",
      four: "Basic app access",
      five: "Customized workout ",
    },
  },
  {
    id: 2,
    MemberShipName: "PLATINUM",
    Price: "30",
    Obtain: {
      one: "All Sliver Atchivments",
      two: "Daily personal training",
      three: "Locker rooms & showers",
      four: "All classes included",
      five: "Private locker",
    },
  },
  {
    id: 3,
    MemberShipName: "GOLD",
    Price: "60",
    Obtain: {
      one: "All Platinum Atchivments",
      two: "Advanced workout",
      three: "In Body For Free",
      four: "3 Supplements For Free ",
      five: "Access To Suna and Jacuzzi",
    },
  },
];

export default function MemberShips() {
  return (
    <div className="viewMemberships">
      {Ships.map((el) => (
        <MemberShip
          key={el.id}
          MemberShipName={el.MemberShipName}
          Price={el.Price}
          Obtain={el.Obtain}
        />
      ))}
    </div>
  );
}
