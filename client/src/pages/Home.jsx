import React, { useState, useEffect } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './home.css';
import Typewriter from 'typewriter-effect';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { meta, introdata } from '../data/portfolio';

const Home = () => {
   const [ dt, setDt ] = useState({
      _id:"",
      pagename:"",
      title:"",
      content:"",
      animated:[],
      orimg:[],
      img:[],
      createAt:"",
      __v:0
   });
   useEffect(()=>{
      const fetchData = async ()=>{
         const { data } = await axios.get("/pageinfo/653b6833a2fe87f29109c516");
         setDt(data);
      }
      fetchData();
   }, []);
   console.log(dt);
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
               <h2 className="ms-5">{dt.title}</h2>
               <h1 className="ms-5 mb-5">
                 <Typewriter 
                    options={{
                        strings: [
                           dt.animated.first,
                           dt.animated.second,
                           dt.animated.third 
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
                   <Link to="/portfolio" className="btn btn-outline-light me-4 px-4">
                      MyPortfolio
                   </Link>
                   <Link to="/contact" className="btn btn-outline-light me-4 px-4">
                      Contact Me
                   </Link>
               </div>
            </div>
            <div className="col-lg-6 col-12 text-center">
               <img src={`http://localhost:3001/pageinfo/${dt.img[0]}`} className="myimg" alt="homeImg" />
            </div>
         </div>
       </section>
    </HelmetProvider>    
  )
}

export default Home