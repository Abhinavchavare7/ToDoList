import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"
import { FaBars, FaMoon } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { MdOutlineWbSunny } from "react-icons/md";

const HeaderNavlinks = () => {
  const [togbtnicon, settogbtnicon] = useState(true)

  // alert(togbtnicon)
  const [theme, setTheme] = useState("light-theme")
  const toggleTheme = () => {
    settogbtnicon(true);
    // alert(togbtnicon)
    if (theme === "light-theme") {
      setTheme("dark-theme")
    } else {
      setTheme("light-theme")
      // alert(theme)
      // document.body.className = theme;

    }
  }
  useEffect((e) => {
    document.body.className = theme;
  }, [theme])


  // console.log(togbtnicon)
  return (

    <div>
      <div className={`navlink-cont ${togbtnicon ? "disp-none" : null}`}>
        <NavLink to="/" className="navlinktext" onClick={() => settogbtnicon(true)}><li>Home</li> </NavLink>
        <NavLink to="/single" className="navlinktext" onClick={() => settogbtnicon(true)} ><li>1_Line_List</li> </NavLink>
        <NavLink to="/totallist" className="navlinktext" onClick={() => settogbtnicon(true)}><li>To_Do_List</li> </NavLink>
      
        {
          theme === "light-theme" ?

            (<i className="navlinktext" onClick={() => toggleTheme()}><li><FaMoon className='iconz' /></li> </i>
            )
            :
            (<i className="navlinktext" onClick={() => toggleTheme()}><li><MdOutlineWbSunny className="iconz" /></li> </i>)

        }
      </div>


      <NavLink to="/" className={`navlinktext tog-pos ${togbtnicon ? null : "disp-none"}`} onClick={() => settogbtnicon(false)}><li><FaBars /></li> </NavLink>
      <NavLink to="/" className={`navlinktext tog-pos ${togbtnicon ? "disp-none" : null} `} onClick={() => { settogbtnicon(true) }}><li><ImCross /></li> </NavLink>
    </div>
  )
}

export default HeaderNavlinks
