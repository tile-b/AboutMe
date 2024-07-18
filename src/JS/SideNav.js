import React, { useState } from "react";
import "../CSS/sideNav.css";
import house from "../Icons/homeIco.png";
import tool from "../Icons/toolIco.png";
import edu from "../Icons/book.png";
import con from "../Icons/contIco.png";

const SideNav = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <>
      <div className="wholeScreen">
        <div className="sidenav">
          <div className="centriranO">
            <div className="alpha" onMouseEnter={() => handleMouseEnter("home")} onMouseLeave={handleMouseLeave}>
              <img src={house} alt="H" className="sideIcon" />
            </div>
          </div>

          <div className="centriranO">
            <div className="breakLine"></div>
          </div>

          <div className="centriranO">
            <div className="b" onMouseEnter={() => handleMouseEnter("projects")} onMouseLeave={handleMouseLeave}>
              <img src={tool} alt="T" className="sideIcon" />
            </div>
          </div>

          <div className="centriranO">
            <div className="breakLine"></div>
          </div>

          <div className="centriranO">
            <div onMouseEnter={() => handleMouseEnter("education")} onMouseLeave={handleMouseLeave}>
              <img src={edu} alt="E" className="sideIcon" />
            </div>
          </div>

          <div className="centriranO">
            <div className="breakLine"></div>
          </div>

          <div className="centriranO">
            <div onMouseEnter={() => handleMouseEnter("contact")} onMouseLeave={handleMouseLeave}>
              <img src={con} alt="C" className="sideIcon" />
            </div>
          </div>

          <div className="centriranO">
            <div className="breakLine"></div>
          </div>


          <div className="centarDno">
            <div className="dnoLogo">L</div>
          </div>
        </div>

        <div className="content-box conA" style={{ opacity: hoveredItem === "home" ? 1 : 0, transition: "opacity 0.4s ease"}}>
  Home
</div>

<div className="content-box conB" style={{ opacity: hoveredItem === "projects" ? 1 : 0, transition: "opacity 0.4s ease"}}>
          My Projects
        </div>
        <div className="content-box conC" style={{ opacity: hoveredItem === "education" ? 1 : 0, transition: "opacity 0.4s ease"}}>
          Education and Skills
        </div>

        <div className="content-box conD" style={{ opacity: hoveredItem === "contact" ? 1 : 0, transition: "opacity 0.4s ease"}}>
          Contact Me
        </div>
      </div>
    </>
  );
};

export default SideNav;


