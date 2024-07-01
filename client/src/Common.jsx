import React from 'react';
import { NavLink } from 'react-router-dom';
import '../src/index.css';

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid  ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-0 pt-lg-5 order-md-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name} <strong className="brand-name">Digital Marketing</strong>
                  </h1>
                  <h3 className="my-3">
                    We are a team of talented Digital Marketers
                  </h3>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn btn-outline-primary">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className='col-lg-6 order-md-2 order-lg-2 header-img'>
                  <img
                    src={props.imgsrc}
                    className='img-fluid animated'
                    alt="home img"
                  />

                </div>
              </div>
            </div>
          </div>
        </div>


      </section>
    </>
  );
}

export default Common;
