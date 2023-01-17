import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";


function Footer() {
    return (
            <div className="footer">
                <footer>
                        <a href="https://www.linkedin.com/in/kiseri-habte-b945bb196/" target="blank" rel="noopener noreferrer">
                            <li className="logo">
                                <FaLinkedin />
                            </li>
                        </a>
                        <a href="https://github.com/Kiserry21" target="blank" rel="noopener noreferrer">
                            <li className="logo">
                                <FaGithub />
                            </li>
                        </a>
                        <a href="https://twitter.com/HabteKiseri" target="blank" rel="noopener noreferrer">
                            <li className="logo">
                                <FaTwitter />
                            </li>
                        </a>
                </footer>
            </div>
        );
    }

export default Footer;