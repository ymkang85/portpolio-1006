import React, { useState } from 'react'
import './portfolio.css'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { portfoliodata, imgData } from '../data/portfolio'
import { Button, Modal } from 'react-bootstrap'

const Portfolio = () => {
   const [show, setShow] = useState(false);
   const [img, setImg] = useState(1);
   const [myData, setMyData] = useState(imgData);
   const [clickStyle1, setClickStyle1] = useState(false);
   const [clickStyle2, setClickStyle2] = useState(false);
   const [clickStyle3, setClickStyle3] = useState(false);
   const [clickStyle4, setClickStyle4] = useState(false);
   const handleClose = () => {
      setShow(false);
   }
   const handleShow = (image) => {
      setImg(image);
      setShow(!show);
   }
   const handleBtns = (cate, num) => {
      setClickStyle1(false);
      setClickStyle2(false);
      setClickStyle3(false);
      setClickStyle4(false);

      switch (num) {
         case 1:
            setClickStyle1(true);
            break;
         case 2:
            setClickStyle2(true);
            break;
         case 3:
            setClickStyle3(true);
            break;
         case 4:
            setClickStyle4(true);
            break;
      }
      const newMyData = imgData.filter((item) => {
         if (cate === 'all') {
            return imgData;
         } else {
            return item.category === cate;
         }
      });
      //console.dir(newMyData);
      setMyData(newMyData);
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
               <button type='button' className='btn btn-warning' style={{ backgroundColor: clickStyle1 ? "#ba8c04" : "ffc107" }} onClick={() => handleBtns('all', 1)} >All</button>
               <button type='button' className='btn btn-warning ms-4' style={{ backgroundColor: clickStyle2 ? "#ba8c04" : "ffc107" }} onClick={() => handleBtns('web', 2)}>Web</button>
               <button type='button' className='btn btn-warning ms-4' style={{ backgroundColor: clickStyle3 ? "#ba8c04" : "ffc107" }} onClick={() => handleBtns('app', 3)}>App</button>
               <button type='button' className='btn btn-warning ms-4' style={{ backgroundColor: clickStyle4 ? "#ba8c04" : "ffc107" }} onClick={() => handleBtns('design', 4)}>Design</button>
            </div>
            <div className="row">
               {
                  myData.map((item, index) => (
                     <div key={index} className="col-6 col-lg-3 portfolio-img">
                        <img src={`https://picsum.photos/id/${item.img}/400/300`} className="img-fluid img-thumbnail mb-5" onClick={() => handleShow(item.img)} />
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
                  <img src={`https://picsum.photos/id/${img}/600/400`} className="img-fluid" />
               </Modal.Body>
            </Modal>
         </div>
      </HelmetProvider>
   )
}

export default Portfolio