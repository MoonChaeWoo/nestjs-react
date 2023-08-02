import React from "react";
import logo from "../static/img/Switch-logo.png";
import { useSelector, useDispatch } from "react-redux";
import { logoutAsyncThunk } from "../RTK/authRTK/loginAsyncThunk";
import { isOpen } from "../RTK/authRTK/signupSlice";

export default function LoginNavi() {
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.auth);

  const handlerLogout = () => {
    if (loggedIn) {
      dispatch(logoutAsyncThunk());
      window.location.reload();
    } else {
      console.log("실행");
      dispatch(isOpen());
    }
  };

  return (
    <div className="drop-shadow-md border-2 flex justify-between items-center px-4 py-2 shadow-soft-2xl rounded-blur bg-white/80 backdrop-blur-2xl w-4/6 h-16 rounded-full">
      <div className="py-2.375 basis-1/3">
        <img src={logo} className="invert w-3/5 h-1/2"></img>
      </div>
      <div className="basis-1/3 py-2.375 mr-4 ml-4">
        <div className="flex justify-around w-full">
          {/* <div className='font-openSans'>profile</div> */}
        </div>
      </div>
      <div className="basis-1/3 text-right pr-5">
        <button
          className="rounded-full leading-pro hover:scale-102 hover:shadow-soft-xs active:opacity-85 ease-soft-in text-xs tracking-tight-soft 
                shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 rounded-3.5xl mb-0 mr-1 inline-block 
                cursor-pointer border-0 bg-transparent px-8 py-2 text-center align-middle font-bold uppercase text-white transition-all"
          onClick={handlerLogout}
        >
          {loggedIn === true ? "로그아웃" : "회원가입"}
        </button>
      </div>
    </div>
  );
}
