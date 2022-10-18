import React from 'react';

function home() {
  return <div>
      <section className="home bd_grid" id="home">
        <div className="home_data" data-aos="fade-down">
          <h1 className="home_title">
            Hi, <br />I'm <span className="home_title-color" style={{color:"#45a98f"}}>Dominic </span><br/>Software Engineer
          </h1>
          <a href="https://github.com/Dominic-SR" target="_blank" className="button" style={{background:"linear-gradient(to right, #358773, #5de0c0)"}}>My Projects</a>
        </div>

        <div className="home_social">
          <a
          href="https://www.linkedin.com/in/dominicseduraja/"
          target="_blank"
          className="home_social-icon"
          data-aos="fade-down"
          data-aos-delay="300"
          >
          <i className='bx bxl-linkedin-square' style={{color:"aqua"},{fontSize:"50px"}}></i>
        </a>
          
          <a
            href="https://wa.me/919042831738"
            target="_blank"
            className="home_social-icon"
            data-aos="fade-down"
            data-aos-delay="300"
            >
            <i className="bx bxl-whatsapp" style={{color:"aqua"},{fontSize:"50px"}}></i>
          </a>
          <a
            href="https://github.com/Dominic-SR"
            target="_blank"
            className="home_social-icon"
            data-aos="fade-down"
            data-aos-delay="300"
            ><i className="bx bxl-github" style={{color:"aqua"},{fontSize:"50px"}}></i></a>
          <a
            href="mailto:dominicseduraja3@gmail.com"
            target="_blank"
            className="home_social-icon"
            data-aos="fade-down"
            data-aos-delay="300"
            >
            <i className='bx bx-mail-send' style={{color:"aqua"}, {fontSize:"50px"}}></i>
          </a>
        </div>
        <div className="home_img" >
          <img src="./assets/img/2.png" />
        </div>
      </section>
      </div>
  ;
}

export default home;
