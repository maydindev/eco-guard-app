import { createSlice } from "@reduxjs/toolkit";
import { useRouter } from "next/navigation";
//import users from "@/data/users"; // Kullanıcı bilgilerini içeren dosya

const users = [
    { username: "admin", password: "123456" },
    { username: "ayşe", password: "654321" },
  ];

const initialState = {
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { username, password } = action.payload;
      const foundUser = users.find(
        (user) => user.username === username && user.password === password 
      );

      if (foundUser) {
        state.user = foundUser;
        state.error = null;
      } else {
        state.error = "Geçersiz kullanıcı adı veya şifre";
      }
    },
    logout: (state) => {
      state.user = null;
      state.error = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
