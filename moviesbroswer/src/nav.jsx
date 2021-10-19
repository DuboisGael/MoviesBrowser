import React from 'react'
import {NavLink} from "react-router-dom";
import { AiFillHome } from 'react-icons/ai';
import { IoSearchCircleSharp } from 'react-icons/io5';
import { FaUserAlt } from 'react-icons/fa';
import {IconContext} from 'react-icons'

export default function Navbar(){

    let icons={size: "10vw", className:"icone"}
    return(
        <nav className="nav">
            <NavLink to="/home">
                <IconContext.Provider value={icons}>
                    <div>
                        <AiFillHome />
                    </div>
                </IconContext.Provider>
            </NavLink>
            <NavLink to="/discover">
                <IconContext.Provider value={icons}>
                    <div>
                        <IoSearchCircleSharp  />    
                    </div>
                </IconContext.Provider>
            </NavLink>
            <NavLink to="/profile">           
                <IconContext.Provider value={icons}>
                    <div>
                        <FaUserAlt />       
                    </div>
                </IconContext.Provider>
            </NavLink>
        </nav>
    )
}
