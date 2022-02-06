import React from 'react';
import Footer from '../footer/footer'
import Home from '../home/home'
import About from "../about/about"
import Skills from "../skills/skills"
import Worksection from '../worksection/worksection';

function main() {
  return <div>
<main className="main">
    <Home/>
    <About/>
    <Skills/>
    <Worksection/>
    <Footer/>
</main>
  </div>;
}

export default main;
