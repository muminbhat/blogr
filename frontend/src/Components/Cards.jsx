import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TextTruncate from "react-text-truncate";

const Cards = () => {
  const [blogCard, setBlogCard] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${"http://127.0.0.1:8000/blog"}`);
        setBlogCard(res.data);
        console.log(res.data);
      } catch (err) {}
    };
    fetchBlogs();
  }, []);

  const Cards = blogCard.map((blogCard) => (
    <div key={blogCard.sno}>
      <Link to="/blog">
        {" "}
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg border border-black"
            style={{ backgroundImage: `url(${blogCard.hero_image})` }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-4 text-white text-shadow-2">
              <h3 className="pt-5 mt-5 mb-5 display-6 lh-1 fw-bold">
                {blogCard.title}
              </h3>
              <span>
              <TextTruncate line={2} text={blogCard.content} />
              </span>
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
        </div>{" "}
      </Link>
    </div>
  ));

  return (
    <>
      <div className="container px-4 py-5" id="custom-cards">
        <div className="row row-cols-1 row-cols-lg-1 align-items-stretch g-4 py-5">
          {Cards}
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to ={'/blog'}>
              <div className="btn btn-info text-center">All Posts</div>
            </Link>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

export default Cards;
