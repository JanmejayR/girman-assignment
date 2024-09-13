import React from "react";
const NavMenuIcon = ({handleNavIconClick , navIconClick}) => {
  return (
    <div className=" fixed z-20 md:hidden right-10 top-10 " >
      <label className="bar" htmlFor="check">
        <input type="checkbox" id="check" onChange={handleNavIconClick} checked={navIconClick}/>

        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
      </label>
    </div>
  );
};

export default NavMenuIcon;
