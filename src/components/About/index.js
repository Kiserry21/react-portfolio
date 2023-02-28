import React from 'react';
import AboutPic from '../../assets/images/about.JPG';
import { Button, DatePicker, Space, version } from 'antd';
import "antd/dist/reset.css";
import "./About.css";


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
                <div className='first'>
                <p>
                Hello, I'm Kiseri Habte, a recent graduate of the Rutgers University Bootcamp. 
                My education in web development has equipped me with the skills and 
                knowledge necessary to excel in the tech industry. 
                I specialize in building web applications with a focus on user experience.
                </p>
                </div>
                
                <div className='second'>
                <p>

                  My background in web development combined with my passion for fitness and reading has led me to focus on 
                  building applications that support and promote healthy lifestyles. 
                  I am well-versed in various web development technologies, 
                  including JavaScript, HTML, CSS, React, and more. I am always eager to learn and stay current with new technologies.

                  </p>
                  </div>

                  <div className='third'>
                  <p>

                  Aside from coding, I enjoy staying active and keeping fit.
                 I am a strong believer in the connection between physical and mental well-being, 
                and I make it a priority to maintain a healthy lifestyle. 
                I am excited to continue my journey in web development and use 
                my skills to build applications that improve people's lives.

                </p>
                </div>
               
                
            </div>
            
        </section>
    );
}

export default About;