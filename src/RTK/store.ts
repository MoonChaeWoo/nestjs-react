import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./authRTK/loginSlice";
import { postSlice } from "./postRTK/postSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import logger from "redux-logger";
import { signupSlice } from "./authRTK/signupSlice";

export const store = configureStore({
  reducer: {
    auth: loginSlice.reducer,
    post: postSlice.reducer,
    sign: signupSlice.reducer,
    // 다른 slice들도 필요하다면 여기에 추가
  },
  //middleware: [thunkMiddleware, logger] as const, // 직접 미들웨어를 지정
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
