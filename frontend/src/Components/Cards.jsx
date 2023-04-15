import React from "react";
import HealthyHabbits from "../Images/HealthyHabbits.jpg";
import Minimalist from "../Images/Minimalist.jpg";
import QuitDrinking from "../Images/QuitDrinking.jpg";
import {Link}
    from 'react-router-dom';

const Cards = () => {
  return (
    <>
      <div className="container px-4 py-5" id="custom-cards">
        <div className="row row-cols-1 row-cols-lg-1 align-items-stretch g-4 py-5">
        <Link to='/blog'> <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg border border-black"
              style={{ backgroundImage: `url(${HealthyHabbits})` }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-4 text-white text-shadow-2">
                <h3 className="pt-5 mt-5 mb-5 display-6 lh-1 fw-bold">
                  How to Build Healthy Habits That Stick
                </h3>
                <p>
                  Many of us have tried to make positive changes in our lives,
                  only to find ourselves slipping back into old habits. This
                  blog post could offer practical advice on how to build healthy
                  habits that actually stick, including setting achievable
                  goals, trackin… …
                </p>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="https://img.icons8.com/plasticine/256/react.png"
                      alt="BlogR"
                      width={32}
                      height={32}
                      className="rounded-circle"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em"></svg>
                    <small>Earth</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em"></svg>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div> </Link>
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg border border-black"
              style={{ backgroundImage: `url(${Minimalist})` }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-4 text-white text-shadow-2">
                <h3 className="pt-5 mt-5 mb-5 display-6 lh-1 fw-bold">
                  How to Build Healthy Habits That Stick
                </h3>
                <p>
                  Many of us have tried to make positive changes in our lives,
                  only to find ourselves slipping back into old habits. This
                  blog post could offer practical advice on how to build healthy
                  habits that actually stick, including setting achievable
                  goals, trackin… …
                </p>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="https://img.icons8.com/plasticine/256/react.png"
                      alt="BlogR"
                      width={32}
                      height={32}
                      className="rounded-circle"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em"></svg>
                    <small>Earth</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em"></svg>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg border border-black"
              style={{ backgroundImage: `url(${QuitDrinking})` }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-4 text-white text-shadow-2">
                <h3 className="pt-5 mt-5 mb-5 display-6 lh-1 fw-bold">
                  How to Build Healthy Habits That Stick
                </h3>
                <p>
                  Many of us have tried to make positive changes in our lives,
                  only to find ourselves slipping back into old habits. This
                  blog post could offer practical advice on how to build healthy
                  habits that actually stick, including setting achievable
                  goals, trackin… …
                </p>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="https://img.icons8.com/plasticine/256/react.png"
                      alt="BlogR"
                      width={32}
                      height={32}
                      className="rounded-circle"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em"></svg>
                    <small>Earth</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em"></svg>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <a href="/">
      <div className="btn btn-info text-center">All Posts</div>
      </a></div>
    </>
  );
};

export default Cards;
