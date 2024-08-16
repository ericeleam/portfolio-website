import React from 'react'
import Link from "next/link";
import NavLink from './NavLink';

const navLinks= [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    }
]
const Navbar = () => {
  return (
    <nav className="p-0">
        <div className="flex flex-wrap items-center justify-between mx-auto p-10 px-1 text-lg font-semibold py-3">
            ERIC ELEAM
         <div className="menu" id="navbar">
            <ul className=" flex p-0 flex-row space-x-6 text-lg font-bold ">
               {
                navLinks.map((link,index) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                </li>
               ))}
            </ul>

         </div>
            </div></nav>
  )
}

export default Navbar