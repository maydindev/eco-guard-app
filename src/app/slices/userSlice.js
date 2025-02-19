import { createSlice } from '@reduxjs/toolkit';

/*
const initialState = {
  user: null,
};
*/

const initialState = [
  { id: 1, type: "Alert", createDateTime: Date.now(), durationText: "5 mins ago", content: "Benzene percentage is high. Long exposure to benzene can cause various lungs conditions"},
  { id: 2, type: "Danger", createDateTime: Date.now(), durationText: "12 mins ago", content: "You Lost 8 mins worth of your lifespan"}
]

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;