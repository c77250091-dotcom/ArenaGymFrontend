import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

import { memo, useCallback, useState, useRef } from "react";

const fitnessLevels = [
  "You Train 1 or 2 Times / Week (Beginner)",
  "You Train 3 or 4 Times / Week (Intermediate)",
  "You Train 5 or 6 Times / Week (Advanced)",
];

const Month = ["1 MONTH", "2 MONTHS", "3 MONTHS", "6 MONTHS", "YEAR"];

const MemberShips = ["SLIVER(15$)", "PLATINUM(30$)", "GOLD(60$)"];
const Coaches = [
  "Ahmed Kamal",
  "Nour Mohamed",
  "Mohamed Hassan",
  "Sarah Ali",
  "Omar Mostafa",
  "Laila Ahmed",
  "Kareem Adel",
  "Eslam Said",
  "Youssef Omar",
];

const Goal = ["Lose Fat", "Bulk", "Maintain"];

const Inputs = memo(function Inputs({
  label,
  type,
  isSelect,
  onCommit,
  error,
}) {
  const [value, setValue] = useState("");
  const debounceRef = useRef(null);

  const handleChange = useCallback(
    (e) => {
      const val = e.target.value;
      setValue(val);
      clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        onCommit(label, val);
      }, 300);
    },
    [label, onCommit],
  );
  return (
    <TextField
      select={Boolean(isSelect)}
      fullWidth
      size="small"
      label={label}
      variant="outlined"
      type={type}
      className="inputs"
      value={value}
      onChange={handleChange}
      error={Boolean(error)}
      helperText={error}
    >
      {isSelect === "fitness"
        ? fitnessLevels.map((level) => (
            <MenuItem key={level} value={level}>
              {level}
            </MenuItem>
          ))
        : isSelect === "coach"
          ? Coaches.map((level) => (
              <MenuItem key={level} value={level}>
                {level}
              </MenuItem>
            ))
          : isSelect === "MemberShip"
            ? MemberShips.map((level) => (
                <MenuItem key={level} value={level}>
                  {level}
                </MenuItem>
              ))
            : isSelect === "Month"
              ? Month.map((level) => (
                  <MenuItem key={level} value={level}>
                    {level}
                  </MenuItem>
                ))
              : isSelect === "Goal"
                ? Goal.map((level) => (
                    <MenuItem key={level} value={level}>
                      {level}
                    </MenuItem>
                  ))
                : false}
    </TextField>
  );
});

export default Inputs;
