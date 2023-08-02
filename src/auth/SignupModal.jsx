import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signupAxios } from "../RTK/authRTK/signupAsyncThunk";
import { onClose } from "../RTK/authRTK/signupSlice";

const SignupModal = () => {
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [roll, setRoll] = useState("");

  const { isOpen } = useSelector((state) => state.sign);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      id,
      email,
      password,
      phone,
      roll,
    };
    dispatch(signupAxios(formData));
  };

  const handleClose = (e) => {
    console.log("닫기 실행");
    dispatch(onClose());
  };

  return (
    isOpen && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
          <h2>회원가입</h2>
          <form id="signup" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-gray-700 font-semibold mb-1"
              >
                사용자명:
              </label>
              <input
                type="text"
                id="username"
                value={id}
                onChange={(e) => setId(e.target.value)}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-1"
              >
                이메일:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-1"
              >
                비밀번호:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-700 font-semibold mb-1"
              >
                전화번호:
              </label>
              <input
                type="phone"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="roll"
                className="block text-gray-700 font-semibold mb-1"
              >
                권한:
              </label>
              <select
                id="roll"
                value={roll}
                onChange={(e) => setRoll(e.target.value)}
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="USER">일반 사용자</option>
                <option value="ADMIN">관리자</option>
              </select>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 mr-2 bg-gray-500 text-white rounded focus:outline-none focus:ring focus:border-blue-300"
              >
                닫기
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded focus:outline-none focus:ring focus:border-blue-300"
              >
                회원가입
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default SignupModal;
