import React from 'react'
import Tilt from 'react-parallax-tilt';
import { styles } from "../styles";

const About = () => {
    return (
        <div className=' bg-black relative flex flex-col lg:px-[100px] px-10 py-[100px]' id="about">
            <h1 className={styles.sectionHeadText}>About Me</h1>
            <div className='grid grid-cols-2 mt-10 justify-items-center max-lg:grid-cols-1'>
                <Tilt>
                    <div className='col-span-1'>
                        <img src="./pp2.png" alt="" />
                    </div>
                </Tilt>
                <div className='col-span-1 text-justify text-[#C69749] text-2xl max-lg:mt-9 max-lg:text-left max-lg:text-base'>
                    I am Harkirat Singh, a Computer Science graduate from Guru Nanak Dev Engineering College in Ludhiana. Currently, I am contributing my skills as an Software Development Engineer at tekki web solutions private limited. In my role, I am responsible for the full stack development of the main software, with a particular focus on building Corporate Application for US and Canada Firms.

                    My professional journey also includes valuable experience as a Freelancer with EverAssignment, where I honed my expertise as a MERN Stack Developer. In addition to my corporate roles, I am passionate about education and have served as a tutor with CodeYoung, imparting knowledge in Web Development to aspiring students.

                    I take pride in my project portfolio, which encompasses diverse applications such as the PDF Annotation React App, Upwork Clone, Smart Attendance System, and Ecommerce Websites, among others. My commitment to excellence, coupled with a genuine love for teaching and project development, defines my professional ethos.
                </div>
            </div>
        </div>
    )
}

export default About