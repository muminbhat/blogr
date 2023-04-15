import React from 'react';
import HeroImage from '../Images/HeroImage.png';
import Cards from '../Components/Cards';
import Contact from '../Components/Contact';

const HomeScreen = () => {
  return (
    <>
<div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img
        src={HeroImage}
        className="d-block mx-lg-auto img-fluid"
        alt="Bootstrap Themes"
        width={700}
        height={500}
        loading="lazy"
      />
    </div>
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 py-1">
      Taking control of your daily life is easy when you know how!
      </h1>
      <p className="lead">
       Either write something worth reading or do something worth writing
      </p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
       <a href="https://muminbhat.com"><button type="button" className="btn btn-info btn-lg px-4 me-md-2">
          Hire Me!
        </button></a>

      </div>
    </div>
  </div>
</div>

<div className="b-example-divider" />
  <div className="bg-dark text-secondary px-4 py-5 text-center">
    <div className="py-5">
      <h1 className="display-5 fw-bold text-white">Blogging WebApp Powered By Django + React + Postgress</h1>
      <div className="col-lg-6 mx-auto">
        <p className="fs-5 mb-4">
          BlogR is a Full-Stack Web Application. Technologies used are | Front-End: Html, Css, JavaScript, React, Sass | Backend: Python, Django | Database: POSTGRESS
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button
            type="button"
            className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
          >
            Contact Us
          </button>
          <button type="button" className="btn btn-outline-success btn-lg px-4">
            Know More
          </button>
        </div>
      </div>
    </div>
  </div>

  <Cards />
  <Contact />
    </>
  )
}

export default HomeScreen