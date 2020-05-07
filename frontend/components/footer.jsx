import React from "react";
import { FaDivide, FaGithub, FaLinkedin, FaWpexplorer } from "react-icons/fa";

const Footer = ()=>{
    return (
      <footer>
        <p>inspired by OpenTable</p>
        <div className="personal">
          <a href="https://github.com/zixlin7">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/zixuan-lin-2a2953a9/">
            <FaLinkedin />
          </a>
        </div>
      </footer>
    );
}

export default Footer;