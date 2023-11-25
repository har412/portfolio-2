import React from "react";
import { styles } from "../styles";
import "./Project.css";
import Tilt from "react-parallax-tilt";

const Projects = () => {
  return (
    <div
      className="flex flex-col bg-black py-10 relative m-auto justify-center"
      id="project"
    >
      <div className={styles.sectionHeadText}>Portfolio</div>
      <div>
        <div className="flex flex-row max-lg:flex-col max-lg:gap-y-8 gap-x-10 justify-center px-3">
          <div>
            <Tilt>
              <div className="card">
                <div className="container-card bg-yellow-box">
                  <img src="./upworkClone.png" alt="" className="rounded-xl" />
                  <p className="card-title">FreelanceIt</p>
                  <p className="card-description">
                    A Platform for freelancers to look for projects and Business
                    Owners to look for Talents
                  </p>
                  <div className="flex flex-row justify-center items-center gap-x-8 mt-3">
                    <a target="_blank" href="https://musical-starlight-0b5ee8.netlify.app/"><button className="text-white text-xl outline-2 outline outline-white rounded-lg px-4 py-2 text-golden">Link</button></a>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
          <div>
            <Tilt>
              <div className="card">
                <div className="container-card bg-green-box">
                  <img src="./pdfAnnotator.png" alt="" className="rounded-xl" />
                  <p className="card-title">PDF Editor Pro</p>
                  <p className="card-description">
                    A Pdf Editor and annotator made using PdfJs and React
                  </p>
                  <div className="flex flex-row justify-center items-center gap-x-8 mt-3">
                    <a target="_blank" href="https://aesthetic-swan-2b76eb.netlify.app/login"><button className="text-white outline-2 text-xl outline outline-white rounded-lg px-4 py-2 text-golden">Link</button></a>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
        </div>
        <div className="flex flex-row max-lg:flex-col max-lg:gap-y-8 gap-x-10 justify-center mt-10 px-3">
          <div>
            <Tilt>
              <div className="card">
                <div className="container-card bg-white-box">
                  <img src="./smartAttendance.png" alt="" className="rounded-xl" />
                  <p className="card-title">AI Backed Attendace System</p>
                  <p className="card-description">
                    Attendace System Made Using Deepface API ejs, Node.js
                  </p>
                  <div className="flex flex-row justify-center items-center gap-x-8 mt-3">
                    {/* <a target="_blank" href=""><button className="text-[#735F32] outline-2 outline outline-[#735F32] rounded-lg px-4 py-2 text-golden">Link</button></a> */}
                  </div>
                </div>
              </div>
            </Tilt>
          </div>

          <div>
            <Tilt>
              <div className="card">
                <div className="container-card bg-blue-box ">
                  <img
                    src="./expenseTracker.png"
                    alt=""
                    className="rounded-xl"
                  />
                  <p className="card-title">Expense Tracker</p>
                  <p className="card-description">
                    Expense Tracker Made in React and using D3.js
                  </p>
                  <div className="flex flex-row justify-center items-center gap-x-8 mt-3">
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
