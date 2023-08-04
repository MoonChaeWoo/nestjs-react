import React from "react";
import rigthImage from "../static/img/login-Right.jpg";
import github from "../static/img/github.svg";
import reactImg from "../static/img/react.png";
import reduxImg from "../static/img/redux.png";
import nestjsImg from "../static/img/nestjs.png";
import typeScriptImg from "../static/img/typescript.png";
import ubuntuImg from "../static/img/ubuntu.png";
import dockerImg from "../static/img/docker.png";
import LoginFrom from "./LoginFrom";
import LoginNavi from "./LoginNavi";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import SignupModal from "./SignupModal";

function transeDashBoard() {
  return (
    <NavLink
      to="/authorized"
      className="animate-bounce inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Go Dashboard!
      <svg
        className="w-3.5 h-3.5 ml-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5h12m0 0L9 1m4 4L9 9"
        />
      </svg>
    </NavLink>
  );
}

export default function Login() {
  const { loggedIn } = useSelector((state) => state.auth);

  return (
    <div className="w-screen h-screen">
      <div className="flex flex-col w-full h-full">
        <div className="flex justify-center py-5 w-screen h-24">
          <LoginNavi />
        </div>
        <div className="w-screen grow">
          <div className="flex h-4/5">
            <div className="basis-1/2 flex justify-center items-center">
              {loggedIn !== true ? <LoginFrom /> : transeDashBoard()}
            </div>
            <div className="basis-1/2 overflow-hidden rounded-lg drop-shadow-lg">
              <img src={rigthImage} className="h-full"></img>
            </div>
          </div>
          <div className="h-1/5">
            <div className="w-full h-full flex justify-around items-center">
              <img src={reactImg} className="h-16" />
              <img src={reduxImg} className="h-16" />
              <img src={nestjsImg} className="h-16" />
              <img src={typeScriptImg} className="h-16" />
              <img src={dockerImg} className="h-16" />
              <img src={ubuntuImg} className="h-16" />
              <img src={github} className="h-16" />
            </div>
          </div>
        </div>
        <div>
          <div>
            <SignupModal></SignupModal>
          </div>
        </div>
      </div>
    </div>
  );
}
