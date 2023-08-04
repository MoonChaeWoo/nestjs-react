import { createSlice } from "@reduxjs/toolkit";
import { signupAxios } from "./signupAsyncThunk";

interface signState {
  isOpen: boolean;
}

const initialState: signState = {
  isOpen: false,
};

export const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    isOpen: (state) => {
      state.isOpen = true;
    },
    onClose: (state) => {
      state.isOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupAxios.pending, (state) => {
        // 로딩 상태를 처리하려면 여기에서 핸들링 가능합니다.
      })
      .addCase(signupAxios.fulfilled, (state, action) => {
        // 회원가입 성공 처리를 여기에서 핸들링하고 모달을 닫을 수 있습니다.
        state.isOpen = false;
      })
      .addCase(signupAxios.rejected, (state, action) => {
        // 회원가입 실패 처리를 여기에서 핸들링하려면 가능합니다.
        console.error("회원가입 실패:", action.error);
      });
  },
});

export const { isOpen, onClose } = signupSlice.actions;
