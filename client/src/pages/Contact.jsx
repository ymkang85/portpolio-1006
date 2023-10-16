import React, { useState } from 'react';
import './contact.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { meta, contact_config } from '../data/portfolio';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
    loading: false,
    show: false,
    alertmessage: '',
    variant: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({ ...formData, loading: true });

    if (formData.email === '') {
      console.log('no!!!');

    } else {

      const templateParams = {
        from_name: formData.email,
        from_username: formData.name,
        to_name: contact_config.ADMIN_EMAIL,
        message: formData.message
      };

      try {
        const res = await emailjs.send(
          contact_config.ADMIN_SERVICE_ID,
          contact_config.ADMIN_TEMPLATE_ID,
          templateParams,
          contact_config.ADMIN_API, 
        );
        console.log(res.text);
        setFormData({
          alertMessage: '전송에 성공했습니다. 곧 답변을 드리겠습니다.',
          variant: 'success',
          show: true,
          loading: false
        });
        console.dir(formData);
      } catch (error) {
        console.error(error.text);
        setFormData({
          ...formData,
          alertMessage: `이메일 전송에 실패했습니다. (${error.text})`,
          variant: 'danger',
          show: true,
          loading: false
        });
        document.getElementsByClassName('co-alert')[0].scrollIntoView();
      }
    }
    //setFormData({ ...formData, loading: false });
  };

  return (
    <HelmetProvider>
      <Container className='container_box'>
        <Helmet>
          <meta charSet="UTF-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row>
          <Col lg="12">
            <Alert
              variant={formData.variant}
              className={`rounded-0 co-alert ${formData.show ? 'd-block' : 'd-none'}`}
              onClose={() => setFormData({ ...formData, show: false })}
              dismissible
            >
              <p className="my-0">{formData.alertmessage}</p>
            </Alert>
          </Col>
        </Row>
        <Row className="mb-5 mt-3 mt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="mb-5 mt-3 mt-md-3">
          <Col lg="5">
            <h3 className="py-4">연락을 기다립니다.</h3>
            <address>
              <strong>EMAIL : </strong>
              <a href={`mailto:${contact_config.ADMIN_EMAIL}`}>{contact_config.ADMIN_EMAIL}</a>
              <br />
              <br />
              <p>
                <strong>PHONE : </strong>
                <a href={`tel:${contact_config.ADMIN_PHONE}`}>{contact_config.ADMIN_PHONE}</a>
              </p>
            </address>
            <p>{contact_config.description}</p>
          </Col>
          <Col lg="1"></Col>
          <Col lg="6" className="mt-3">
            <form className="contact_form w-100" onSubmit={handleSubmit}>
              <Row className="align-items-center">
                <Col lg="6" className="form-group">
                  <input type="text" placeholder="이름" className="form-control" name="name" onChange={handleChange} value={formData.name} required />
                </Col>
                <Col lg="6" className="form-group">
                  <input type="text" placeholder="이메일" className="form-control" name="email" onChange={handleChange} value={formData.email} required />
                </Col>
                <Col lg="12" className="mt-4 form-group">
                  <textarea className="form-control" placeholder="내용" rows="5" name="message" onChange={handleChange} value={formData.message} required ></textarea>
                </Col>
                <Col lg="12" className="form-group mt-4">
                  <button className="btn btn-action" type="submit">
                    {formData.loading ? '전송중...' : '전송'}
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
      <div className={formData.loading ? 'loading-bar' : 'd-none'}></div>
    </HelmetProvider>
  );
};

export default Contact;
