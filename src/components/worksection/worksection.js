import React from 'react';

function worksection() {
  return <div>
      <section className="work section" id="work">
        <h2 className="section-title" data-aos="fade-down">Current Tech Stack</h2>

        <div
          className="work_container bd_grid"
          data-aos="fade-down"
          data-aos-delay="250"
        >
        
          <div className="work_img">
            <h4>React JS</h4>
            <a href="https://github.com/Dominic-SR/React-Functionality"  target="_blank">
            <img src="assets/img/react.png" alt="" />
            </a>
          </div>

          <div className="work_img">
            <h4>Redux</h4>
            <a href="https://github.com/Dominic-SR/React-Redux">
            <img src="assets/img/redux.png" alt="" />
            </a>
          </div>

          <div className="work_img">
            <h4>Node JS</h4>
            <a href="https://github.com/Dominic-SR/NodeJS-Mysql">
            <img src="assets/img/node.png" alt="" />
            </a>
          </div>

          <div className="work_img">
            <h4>Graph QL</h4>
            <a href="https://github.com/Dominic-SR/GraphQL">
            <img src="assets/img/graphql.png" alt="" />
            </a>
          </div>

          <div className="work_img">
            <h4>PHP</h4>
            <a href="https://github.com/Dominic-SR/PHP-CORE">
            <img src="assets/img/php.png" alt="" />
            </a>
          </div>
          <div className="work_img">
            <h4>Angular</h4>
            <a href="https://github.com/Dominic-SR/React-Typescript">
            <img src="assets/img/typescript.png" alt="" />
            </a>
          </div>

        </div>
      </section>
  </div>;
}

export default worksection;
