import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Login = ({ onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [onClose]);

  useEffect(() => {
    if (modalRef.current) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <div className="absolute z-[50] inset-0 flex justify-center items-center h-screen bg-black/70 text-black">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-[80%] h-[70%] sm:w-[40%] md:w-[50%] md:max-w-[30%] bg-Solitude rounded-md shadow-sm py-4"
        ref={modalRef}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="mb-4 text-center text-2xl font-semibold">Login</h1>
          <div className="flex flex-col m-2 w-[80%]">
            <form>
              <input
                type="password"
                className="mb-4 border border-gray border-opacity-10 bg-transparent h-[45px] p-3 rounded-md focus:outline-none focus:border-Teal focus:ring-Teal block w-full sm:text-sm focus:ring-1 placeholder-style"
                placeholder="Masukan Password"
              />
              <input
                type="password"
                className="mb-4 border border-gray border-opacity-10 bg-transparent h-[45px] p-3 rounded-md focus:outline-none focus:border-Teal focus:ring-Teal block w-full sm:text-sm focus:ring-1 placeholder-style"
                placeholder="Masukan Password"
              />
            </form>
            <button className="mb-4 w-full bg-Teal h-[45px] rounded-sm text-white font-normal hover:shadow-xl">
              Masuk
            </button>
            <button className="text-Teal font-normal">Lupa Password?</button>
          </div>
          <hr className="mb-5 w-full border-t-1 border-slate-300" />
          <p className="text-[16px]">
            Belum Bergabung?
            <Link to="/register" className="text-Teal font-normal ml-1">
              Daftar Akun
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
