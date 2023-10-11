import React from 'react'
import "./about.css";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Row, Col } from 'react-bootstrap';
import { meta, dataabout, mytimeline, myskills, services } from '../data/portfolio'

const About = () => {
  return (
    <HelmetProvider>
      <Container className='about-header'>
        <Helmet>
          <meta charSet="UTF-8" />
          <title>About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className='mb-5 mt-3 pt-md-3'>
          <Col lg="8">
            <h1 className='display-4 mb-4'>About Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className='sec_sp'>
          <Col lg="5">
            <h3 className='color_sec py-4'>{dataabout.title}</h3>
          </Col>
          <Col lg="7" className='d-flex align-items-center'>
            <p>{dataabout.content}</p>
          </Col>
        </Row>
        <Row className='sec_sp'>
          <Col lg="5">
            <h3 className='color_sec py-4'>My Work Timeline</h3>
          </Col>
          <Col lg="7">
            <table className='table caption-top'>
              <tbody>
                {
                  mytimeline.map((item, i)=>(
                    <tr key={i}>
                      <th scope='row'>{item.jobtitle}</th>
                      <td>{item.where}</td>
                      <td>{item.date}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className='sec-sp'>
          <Col lg="5">
            <h3 className='color_sec py-4'>My Skills</h3>
          </Col>
          <Col lg="7">
            {
              myskills.map((item, i) => (
                <div key={i}>
                  <h3 className='progress-title'>{item.name}</h3>
                  <div className='progress'>
                    <div className="progress-bar" style={{ width: `${item.value}%` }}>
                      <div className="progress-value">{item.value}%</div>
                    </div>
                  </div>
                </div>
              ))
            }
          </Col>
        </Row>
        <Row className='sec_sp'>
          <Col lg="5">
            <h3 className='color_sec py-4'> Services</h3>
          </Col>
          <Col lg="7">
            {
              services.map((item, i) => (
                <div className="serv py-4" key={i}>
                  <h4 className='serv_title'>{item.title}</h4>
                  <p className='serv_desc'>{item.description}</p>
                </div>
              ))
            }
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  )
}

export default About