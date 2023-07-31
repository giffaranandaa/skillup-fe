import React, { useEffect, useState, useRef } from "react";
import { navLinks } from "../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import MobileNavLinks from "./MobileNavLinks";
import Login from "../../Components/LoginRegisterPage/Login";

const Navbar = () => {
  const [toogle, setToggle] = useState(false);
  const [active, setActive] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const modalRef = useRef();

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };

    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);

  return (
    <div
      className={`${
        active ? "shadow-lg bg-Solitude" : ""
      } fixed w-full top-0 left-0 z-20 `}
    >
      <motion.div className="" initial={{ y: -150 }} animate={{ y: 0 }}>
        <div className="container py-4 mx-auto flex items-center justify-between px-2">
          <div className="flex items-center gap-4">
            <HiMenuAlt1
              className="text-3xl sm:hidden cursor-pointer"
              onClick={() => setToggle(true)}
            />
            <div className="text-xl text-Teal uppercase tracking-wide font-bold">
              Skillup
            </div>
          </div>
          <div className="flex">
            <div className="sm:flex items-center hidden">
              {navLinks.map((navLink) => {
                return <NavLink key={navLink.id} {...navLink} />;
              })}
            </div>
            <div className="flex gap-5">
              <Link
                to="/register"
                className="py-3 px-6 font-bold text-sm border border-solid rounded-lg flex border-gray"
              >
                Sign Up
              </Link>
              <button
                className="py-3 px-6 font-bold text-sm border border-solid rounded-lg flex border-gray"
                onClick={handleOpen}
              >
                Sign In
              </button>
              {openModal && <Login onClose={handleClose} />}
            </div>
          </div>
          {toogle && (
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="fixed h-full w-96 top-0 left-0 z-20 bg-Teal text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8"
            >
              {navLinks.map((navLink) => {
                return (
                  <MobileNavLinks
                    key={navLink.id}
                    {...navLink}
                    setToggle={setToggle}
                  />
                );
              })}
              <HiX
                className="absolute right-12 top-12 text-3xl cursor-pointer"
                onClick={(prev) => setToggle(!prev)}
              />
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
