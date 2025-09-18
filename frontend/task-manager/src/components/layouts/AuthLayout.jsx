import React from "react";
import UI_IMG from "../../assets/images/auth-image.webp";
import BG_IMG from "../../assets/images/bg.jpg"; // Import background image

const AuthLayout = ({ children }) => {
  return (
    <div className="flex w-screen h-screen">
      {/* Left side - form */}
      <div className="w-full md:w-[60vw] px-12 pt-8 pb-12 flex flex-col">
        <h2 className="text-lg font-medium text-black mb-6">Task Manager</h2>
        {children}
      </div>

      {/* Right side - background + illustration */}
      <div
        className="hidden md:flex w-[40vw] h-full items-center justify-center bg-blue-50 bg-cover bg-no-repeat bg-center p-8"
        style={{ backgroundImage: `url(${BG_IMG})` }}
      >
        <img src={UI_IMG} className="w-64 lg:w-[90%]" alt="Auth Illustration" />
      </div>
    </div>
  );
};

export default AuthLayout;
