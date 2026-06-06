import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ValidationLogin from "../Components/Valid/valid";
import {
  ValidationSignUp,
  ValidationStage2,
  ValidationStage3,
} from "../Components/Valid/valid";
import instance from "../api/axiosInstance";
import { setAuthToken } from "../api/axiosInstance";

export const LoginRequest = createAsyncThunk("LoginRequest", async (Data) => {
  let response = await instance.post("/auth/login", Data);
  return response.data;
});

export const signUpRequest = createAsyncThunk("signUpRequest", async (Data) => {
  let response = await instance.post("/auth/signUp", Data);
  return response.data;
});

const initialState = {
  isRegister: false,
  isValid: false,
  errors: {},
  login: {},
  signUp: {},
  hasSubmittedLogin: false,
  hasSubmittedSignUp: false,
  loading: false,
  token: null,
  apiError: null,
  signUPstage2: {},
  hasSubmittedStage2: false,
  step: 0,
  signUPstage3: {},
  hasSubmittedStage3: false,
  isSuccess: false,
};

export const Data = createSlice({
  name: "data",
  initialState,
  reducers: {
    isRegister: (state, action) => {
      state.isRegister = !state.isRegister;
      state.errors = {};
      state.hasSubmittedLogin = false;
      state.hasSubmittedSignUp = false;
      state.isValid = false;
      state.isSuccess = false;
      state.step = 0;
      state.login = {};
      state.signUp = {};
    },
    login: (state, action) => {
      let { label, value } = action.payload;
      state.login[label] = value;
      if (state.hasSubmittedLogin) {
        state.errors = ValidationLogin(state.login);
      }
    },
    submitLogin: (state) => {
      state.hasSubmittedLogin = true;
      state.errors = ValidationLogin(state.login);
      if (Object.keys(state.errors).length === 0) {
        state.isValid = true;
      } else {
        state.isValid = false;
      }
    },
    signUp: (state, action) => {
      let { label, value } = action.payload;
      state.signUp[label] = value;
      if (state.hasSubmittedSignUp) {
        state.errors = ValidationSignUp(state.signUp);
      }
    },
    submitSignUP: (state, action) => {
      state.errors = ValidationSignUp(state.signUp);
      state.hasSubmittedSignUp = true;
      if (Object.keys(state.errors).length === 0) {
        state.isValid = true;
        state.step = 1;
      } else {
        state.isValid = false;
      }
    },
    signUpSecond: (state, action) => {
      let { label, value } = action.payload;
      state.signUPstage2[label] = value;
      if (state.hasSubmittedStage2) {
        state.errors = ValidationStage2(state.signUPstage2);
      }
    },
    submitSignUPSecond: (state) => {
      state.errors = ValidationStage2(state.signUPstage2);
      state.hasSubmittedStage2 = true;
      if (Object.keys(state.errors).length === 0) {
        state.isValid = true;
        state.step = 2;
      } else {
        state.isValid = false;
      }
    },
    signUpThird: (state, action) => {
      let { label, value } = action.payload;
      state.signUPstage3[label] = value;
      if (state.hasSubmittedStage3) {
        state.errors = ValidationStage3(state.signUPstage3);
      }
    },
    submitSignUPThird: (state) => {
      state.errors = ValidationStage3(state.signUPstage3);
      state.hasSubmittedStage3 = true;
      if (Object.keys(state.errors).length === 0) {
        state.isValid = true;
        state.step = 3;
        state.isSuccess = true;
      } else {
        state.isValid = false;
        state.isSuccess = false;
      }
    },
    logout: (state) => {
      setAuthToken(null);
      return initialState;
    },
    stageTwo : (state) =>{
      state.signUPstage2 ={}
    },
        stageThree : (state) =>{
      state.signUPstage3 ={}
    }
  },
  extraReducers(builder) {
    builder
      .addCase(LoginRequest.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(LoginRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        setAuthToken(action.payload.token);
      })
      .addCase(LoginRequest.rejected, (state, action) => {
        state.loading = false;
        state.apiError = action.error.message;
      });
    builder
      .addCase(signUpRequest.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signUpRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        setAuthToken(action.payload.token);
      })
      .addCase(signUpRequest.rejected, (state, action) => {
        state.loading = false;
        state.apiError = action.error.message;
      });
  },
});

export const {
  login,
  signUp,
  isRegister,
  submitLogin,
  submitSignUP,
  signUpSecond,
  submitSignUPSecond,
  signUpThird,
  submitSignUPThird,
  logout,
  stageTwo,
  stageThree,
} = Data.actions;
export default Data.reducer;
