import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './portfolio.css'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { portfoliodata, imgData } from '../data/portfolio'
import { button, Modal } from 'react-bootstrap'

const Portfolio = () => {
   const [show, setShow] = useState(false);
   const [img, setImg] = useState('all');
   const handleClose = () => {
      setShow(false);
   }
   const handleShow = () => {
      setShow(!show);
   }
   const handleBtns = (e) => {
      setImg(e.target.value);
   }
   return (
      <HelmetProvider>
         <div className="container p-5">
            <Helmet>
               <meta charSet="UTF-8" />
               <title>{portfoliodata.title}</title>
               <meta name="description" content={portfoliodata.description} />
            </Helmet>
            <h1 className="mt-5 mb-5 bt-line border-bottom">My PortFolio</h1>
            <div className="btn-box">
               <button type='button' className='btn btn-warning' value="all" onClick={handleBtns} >All</button>
               <button type='button' className='btn btn-warning ms-4' value="web" onClick={handleBtns}>Web</button>
               <button type='button' className='btn btn-warning ms-4' value="app" onClick={handleBtns}>App</button>
               <button type='button' className='btn btn-warning ms-4' value="design" onClick={handleBtns}>Design</button>
            </div>
            <div className="row">
               {
                  imgData.filter((item) => {
                     if (img === 'all') {
                        return item;
                     } else if (img === 'web') {
                        return (item.category === 'web');
                     } else if (img === 'app') {
                        return (item.category === 'app');
                     } else if (img === 'design') {
                        return (item.category === 'design');
                     }
                  }).map((item, index) => (
                     <div key={index} className="col-6 col-lg-3 portfolio-img">
                        <img src={`https://picsum.photos/id/${item.img}/400/300`} className="img-fluid img-thumbnail mb-5" onClick={handleShow} />
                     </div>
                  )
                  )
               }
            </div>
            <Modal show={show} onHide={handleClose}>
               <Modal.Header closeButton>
                  포트폴리오 설명
               </Modal.Header>
               <Modal.Body closeButton>
               {
                  imgData.map((item, index) => (
                     <div key={index} className="col-6 col-lg-3 portfolio-img">
                        <img src={`https://picsum.photos/id/${item.img}/400/300`} className="img-fluid img-thumbnail mb-5" onClick={handleShow} />
                     </div>
                  )
                  )
               }
               </Modal.Body>
            </Modal>
         </div>
      </HelmetProvider>
   )
}

export default Portfolio