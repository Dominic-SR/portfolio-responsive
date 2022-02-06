import React from 'react';

function about() {
  return <div><section className="about section" id="about">
  <h2 className="section-title" data-aos="fade-down" style="color:#45a98f">About</h2>

  <div className="about_container bd_grid">
    <div className="about_img" >
        <img src="./assets/img/3.png" />
    </div>

    <div>
      <h2
        className="about_subtitle"
        data-aos="fade-down"
        data-aos-delay="350"
      >
        I'm Jagadeesan
      </h2>
      <p className="about_text" data-aos="fade-down" data-aos-delay="450">
        I'm a software Developer. I describe myself as a passionate developer who loves coding, open source, and the web platform ❤️.
      </p>
    </div>
  </div>
</section></div>;
}

export default about;
