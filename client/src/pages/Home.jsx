import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './home.css';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import { logotext, meta, introdata } from '../data/portfolio';

const Home = () => {
  return (
    <HelmetProvider>
       <section id="home" className="home">
         <Helmet>
            <meta charSet="utf-8" />
            <title> {meta.title} </title>
            <meta name="description" content={meta.description} /> 
         </Helmet>
         <div className="d-block 
                         d-lg-flex 
                         align-items-center 
                         justify-content-between">
            <div className="col-lg-6 col-12 ps-5">
               <h2 className="ms-5">{introdata.title}</h2>
               <h1 className="ms-5 mb-5">
                 <Typewriter 
                    options={{
                        strings: [
                           introdata.animated.first,
                           introdata.animated.second,
                           introdata.animated.third 
                        ],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 100 
                    }}
                 />
               </h1>
               <p className="ms-5">
                  {introdata.description}
               </p>
               <div className="mt-4 ps-5 btn-box">
                   <Link to="/portfolio" className="btn btn-light me-4 px-4">
                      MyPortfolio
                   </Link>
                   <Link to="/contact" className="btn btn-outline-light px-4">
                      Contact Me
                   </Link>
               </div>
            </div>
            <div className="col-lg-6 col-12 text-center">
               <img src={introdata.img_url} className="myimg" />
            </div>
         </div>
       </section>
    </HelmetProvider>    
  )
}

export default Home