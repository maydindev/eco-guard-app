"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../slices/userSlice";
import { useRouter } from "next/navigation";
import React from "react";
import "/src/app/globals.css";

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isAgree, setIsAgree] = useState(false);
  const [error, setError] = useState({
    username: "",
    password: "",
    isAgree: "",
  });

  const handleLogin = () => {
    setError({ username: "", password: "", isAgree: false });

    console.log("Girilen kullanıcı adı:", username);
    console.log("Girilen şifre:", password);
    console.log("Koşulları kabul:", isAgree);

    if (username.trim() !== "admin" || password !== "1234" || !isAgree) {
      if (username.trim() !== "admin") {
        setError((prev) => ({ ...prev, username: "Kullanıcı adı hatalı!" }));
      }
      if (password !== "1234") {
        setError((prev) => ({ ...prev, password: "Şifre hatalı!" }));
      }
      if (!isAgree) {
        setError((prev) => ({
          ...prev,
          isAgree: false,
        }));
      }
      return;
    }
    //dispatch(login({ username: "admin" }));
    router.push("/dashboard");
  };

  const handleSignUp = () => {
    router.push('/register');
  };

  return (
    <div className="w-full h-screen bg-white bg-cover rounded-lg bg-center">
      <div className="w-full h-screen bg-[url('/signinbackground.png')] bg-no-repeat bg-cover rounded-tr-[700px] rounded-br-[150px] bg-center absolute inset-0">
        <div className="flex p-6">
          <img
            src="/ecoguardlogo.png"
            alt="logo"
            className="w-12 h-12 mr-2 align-baseline"
          />
          <img src="/ecoguardlogotext.png" alt="logo" className="h-10 mt-2" />
        </div>

        <div className="flex justify-center">
          <div className="bg-black/65 p-8 rounded-2xl shadow-lg backdrop-blur-sm w-96 mt-8 relative">
            <div className="flex justify-start">
              <h2 className="text-2xl font-semibold text-white text-center mb-6 mt-6">
                Sign In
              </h2>
            </div>

            <div className="mb-4">
              <div className="flex items-center border-2 rounded-md px-3 py-2 mt-1">
                <span className="text-white pr-2">
                  <img
                    src="/iconperson.png"
                    alt="Person Figure"
                    className="w-3 h-3"
                  />
                </span>

                <input
                  type="text"
                  className="bg-transparent flex-1 outline-none text-white"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={{ borderColor: error.username ? "red" : "black" }}
                />
              </div>
              {error.username && (
                <p style={{ color: "red" }}>{error.username}</p>
              )}
            </div>

            <div className="mb-4">
              <div className="flex items-center border-2 rounded-md px-3 py-2 mt-1">
                <span className="text-gray-400 pr-2">
                  <img
                    src="/iconlock.png"
                    alt="Eye Figure"
                    className="w-3 h-4"
                  />
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="bg-transparent flex-1 outline-none"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ borderColor: error.password ? "red" : "black" }}
                />

                <span className="text-gray-400 cursor-pointer">
                  <img
                    src="/iconeye.png"
                    alt="Eye Figure"
                    className="w-6 h-4"
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </span>
              </div>
              {error.password && (
                <p style={{ color: "red" }}>{error.password}</p>
              )}
            </div>

            <div className="mb-20 flex items-center text-sm text-white">
              <input
                type="checkbox"
                className="mr-2 mb-4 appearance-none w-3 h-3 ml-4 border border-white  bg-transparent checked:bg-blue-500 checked:border-blue-500 focus:ring-2 focus:ring-blue-300"
                value={isAgree}
                onChange={(e) => setIsAgree(e.target.checked)}
                style={{ borderColor: error.password ? "red" : "black" }}
              />
              <div>
                <span>
                  I agree{" "}
                  <span className="font-semibold text-white">
                    Terms and Conditions & Private Policy
                  </span>{" "}
                  by Signing in
                </span>
                {error.isAgree !== "" && (
                  <p style={{ color: "red" }}>
                    {error.isAgree ? "" : "Şartlarımızı kabul etmediniz!"}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col justify-center mx-6 mb-10 ">
              <button
                className="w-full bg-white text-blue-600 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
                onClick={handleLogin}
              >
                Log In
              </button>

              <button className="w-full mt-3 border-2 border-white text-white py-2 rounded-md font-semibold hover:bg-gray-100 transition" onClick={handleSignUp}>
                Sign Up
              </button>
            </div>

            <img
              src="/person.png"
              alt="Human Figure"
              className="w-100 h-80 absolute bottom-[-10px] left-[230px] right-[10px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
