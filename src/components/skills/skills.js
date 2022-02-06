import React from 'react';

function skills() {
  return <div>
      <section className="skills section" id="skills">
        <h2 className="section-title" data-aos="fade-down">Skills</h2>

        <div className="skills_container bd_grid">
          <div>
            <h2
              className="skills_subtitle"
              data-aos="fade-down"
              data-aos-delay="250"
            >
              Professional Skills
            </h2>
            <p className="skills_text" data-aos="fade-down" data-aos-delay="350">
              Without sharpen your weapon; standing on the battlefield would not
              increase your chance of winning
            </p>
            <div className="skills_data" data-aos="fade-right">
              <div className="skills_name">
                <i className="bx bxl-react skill_icon"></i>
                <box-icon type='logo' name='react'></box-icon>
                <span className="skill_name">Front-End & UI Designing</span>
              </div>

              <div><span className="skill_percentage">95%</span></div>

              <div className="skill_bar skill_html"></div>
            </div>

            <div className="skills_data" data-aos="fade-right" data-aos-delay="250">
              <div className="skills_name">
                <i className='bx bxl-nodejs skill_icon' ></i>
                <span className="skill_name">Back-End & API Service</span>
              </div>

              <div><span className="skill_percentage">85%</span></div>

              <div className="skill_bar skill_css"></div>
            </div>

            <div className="skills_data" data-aos="fade-right" data-aos-delay="250">
              <div className="skills_name">
                <i className="bx bxl-git skill_icon"></i>
                <span className="skill_name">version Control(git,github,bitbucket)</span>
              </div>

              <div><span className="skill_percentage">75%</span></div>

              <div className="skill_bar skill_js"></div>
            </div>

            <div className="skills_data" data-aos="fade-right" data-aos-delay="250">
              <div className="skills_name">
                <i className='bx bxs-data skill_icon' ></i>
                <span className="skill_name">Database(MongoDB,MySql)</span>
              </div>

              <div><span className="skill_percentage">80%</span></div>

              <div className="skill_bar skill_ui"></div>
            </div>
          </div>
            
        <div data-aos="fade-left" data-aos-delay="350">
            <img src="./assets/img/1.png" />
        </div>
        </div>
      </section>
  </div>;
}

export default skills;
