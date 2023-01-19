import React from 'react';
import AboutPic from '../../assets/images/about.JPG';
import { Button, DatePicker, Space, version } from 'antd';
import "antd/dist/reset.css";


function About() {
    return (
        <section>
            <div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
            <div className="center">
				<img
					src={AboutPic}
					alt="about-me"
					className="photo"
				/>
			</div>
            <div className="about-me">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                
            </div>
            
        </section>
    );
}

export default About;