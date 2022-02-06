import React from 'react';

function footer() {
  return <div>
       <footer className="footer">
        <p className="footer_title" data-aos="fade-down">Contact Me</p>

        <div className="footer_socials">
          <a
            href="https://www.linkedin.com/in/jagadeesan-p-5a78ab188/"
            target="_blank"
            className="footer_icon"
            data-aos="fade-down"
            data-aos-delay="250"
            >
            <i className='bx bxl-linkedin-square' ></i>
          </a>
          
          <a
            href="https://wa.me/916381281493"
            target="_blank"
            className="footer_icon"
            data-aos="fade-down"
            data-aos-delay="450"
            >
            <i className='bx bxl-whatsapp' ></i>
          </a>
          <a
            href="https://github.com/Jagadeesan20"
            target="_blank"
            className="footer_icon"
            data-aos="fade-down"
            data-aos-delay="550"
            ><i className="bx bxl-github"> </i></a>
          <a
            href="mailto:p.jagadish07112002@gmail.com"
            target="_blank"
            className="footer_icon"
            data-aos="fade-down"
            data-aos-delay="550"
            >
            <i className='bx bx-mail-send'></i>
          </a>
        </div>

        {/* <!-- <p data-aos="fade-down" data-aos-delay="650">
          &#169; 2021 copyright all right reserved
        </p> --> */}
        <p>&#169; 2022 copyright all right reserved</p>
      </footer>
  </div>;
}

export default footer;

