import React from "react";
import { FaDivide, FaGithub, FaLinkedin, FaWpexplorer } from "react-icons/fa";

const Footer = ()=>{
    return(
        <footer>
            <p>inspired by OpenTable</p>
            <div className="personal">
                <a href=""><FaGithub/></a>
                <a href=""><FaLinkedin/></a>
            </div>
        </footer>
    )
}

export default Footer;