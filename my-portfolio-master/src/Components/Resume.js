import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid className="resume-gird">
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="images/ismail.jpg"
                alt="avatar"
                style={{ height: "250px" }}
              />
            </div>

            <h2 style={{ paddingTop: "1em" }}>Namrata sahu </h2>
            <h4 style={{ color: "grey" }}>ReactJS Developer</h4>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <p style={{ textAlign: "justify" }}>
              I am Namrata Sahu. I’m an enthusiastic, responsible, self-motivated and hard-working person.
              I’m able to work well under pressure and adhere to strict deadlines.
              Being worked for different projects helped me to adapt to the changes quickly and made me a mature team worker.
            </p>
            <hr style={{ borderTop: "2px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Baner, Pune, MH </p>
            <h5>Phone</h5>
            <p>7000578829</p>
            <h5>Email</h5>
            <p>namratasahu081998@gmail.com</p>
            <h5>Git id</h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href="https://github.com/namratasahu02"
            >
              My Github id link
            </a>
            <h5>Linkedin id</h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href="https://www.linkedin.com/in/namrata-sahu"
            >
              Linkedin link
            </a>

            <h5>Download CV</h5>
            <a
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
              href="https://drive.google.com/file/d/1li5EA8gcSYDeAM8UuQrS_lyMskPOD_gI/view?usp=sharing"
            >
              My Update CV
            </a>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Experience</h2>
            <Experience
              startYear={"February 2022"}
              endYear={"Present"}              
              jobName={"ReactJS Developer"}
              companyName={"ASTHA IT"}
              jobDesc={
                [

                  "Worked on multiple projects using React.js,React hooks,Redux,Javascript", 
" Worked on Web applications using ReactJs Stack",
" Experience with Atlassian products like Jira, bit-bucket etc", 
" Experience with Githuh,Postman",


                 
                ]
              }
            />
            <Experience
              startYear={"february 2022"}
              endYear={"july 2022"}
              duration= {6}
              jobName={"Internship (Remote)"}
              companyName={"Cybrom teachnology"}
              jobDesc={[
                "I have completed several assignments that provided by Senior Software Engineers",
                "I learnt lot of tech things from this company I now had a chance to test my knowledge in the real world through an internship."
               , "Designing & developing new features."
              ]
              }
            />
           

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Education</h2>
            <Education
              startYear={2019}
              endYear={2022}
              schoolName={"Dr. Harisingh Gour University, sagar, MP"}

              degreeName={"MCA"}
            />


<Education
              startYear={2016}
              endYear={2019}
              schoolName={"Maharaja Chhatrasal Bundelkhand University "}

              degreeName={"Bsc"}
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />            
            <h2>Skills</h2>
            <Skills skill={"HTML/CSS"} progress={80} />
            <Skills skill={"ReactJS"} progress={80} />
            <Skills skill={"Bootstrap"} progress={85} />
            <Skills skill={"javascript"} progress={75} />
           
           
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Achievments</h2>
            <h6>Perfect attendance awardee for 2 years
</h6>
            <h6>Volunteer awardee in college events</h6>

            <hr style={{ borderTop: "3px solid #e22947" }} /> 
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
