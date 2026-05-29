import { createSlice } from "@reduxjs/toolkit";

const User = createSlice({
  name: "UI",
  initialState: {
    activeOption: 1,
  },
  reducers: {
    option: (state, action) => {
      state.activeOption = action.payload.id;
    },
  },
});

export const { option } = User.actions;

export default User.reducer;
