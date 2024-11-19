import React, { useState } from "react";
import logo from "../../assets/logo.png";
import underline from "../../assets/nav_underline.svg";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState("Home"); 
  const navigate = useNavigate();
 
  
  return (
    <div className="flex items-center justify-between mx-44 my-5 cursor-pointer">
      <img className="
      w-52 h-auto" src={logo} alt="" />
      <ul className="flex items-center gap-16 text-xl">
        <NavLink to = '/'>
        <li>
          <p onClick={() => setMenu("Home")}>Home</p>
          {menu === "Home" ? <img src={underline} alt="underline" /> : null}
        </li>
        </NavLink>
        <NavLink to = '/about'>
        <li>
          <p onClick={() => setMenu("About")}>About Me</p>
          {menu === "About" ? <img src={underline} alt="underline" /> : null}
        </li>
        </NavLink>
        <NavLink to = '/portfolio'>
        <li>
          <p onClick={() => setMenu("Portfolio")}>Portfolio</p>
          {menu === "Portfolio" ? <img src={underline} alt="underline" /> : null}
        </li>
        </NavLink>
        <NavLink to = '/contact'>
        <li>
          <p onClick={() => setMenu("Contact")}>Contact</p>
          {menu === "Contact" ? <img src={underline} alt="underline" /> : null}
        </li>
        </NavLink>
      </ul>
      <div className="px-5 py-4 rounded-full bg-gradient-to-r from-custom-orange to-custom-purple text-2xl cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-110">
        <button onClick={() => navigate('/contact')} className="w-full h-full">Connect With Me</button>
      </div>
    </div>
  );
};

export default Navbar;
