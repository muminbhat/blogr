import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import TextTruncate from 'react-text-truncate';

const BlogList = (props) => {
  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    
    const fetchBlogs = async () => {
      props.setProgress(20);
        try {
            const res = await axios.get(`${'http://127.0.0.1:8000/blog'}`);
            setBlogs(res.data);
          }
          catch (err) {
          }
          props.setProgress(100);
        }
        fetchBlogs();
      }, [props]);
      


const blogList = blogs.map(blogs=> 
    <div key={blogs.sno}>

      <div className="col">
        <Link to={blogs.slug}>
          <div
            className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
            style={{ backgroundImage: `url(${blogs.hero_image})` }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                {blogs.title}
              </h3>
              <p> <TextTruncate     line={2}     element="span"     truncateText="…"     text={blogs.content}/></p>
              <ul className="d-flex list-unstyled mt-auto">
                <li className="d-flex align-items-center me-3">
                  <small className="badge bg-success-subtle border border-success-subtle text-success-emphasis rounded-pill">
                    {blogs.category}
                  </small>
                </li>
                <li className="d-flex align-items-center">
                  <small className="badge bg-success-subtle border border-success-subtle text-success-emphasis rounded-pill">
                    {blogs.author}
                  </small>
                </li>
              </ul>
            </div>
          </div>
          </Link>
      </div>
      
    </div>


  );

  return <div className="container">
    <h2>Blogs</h2>
  <div className="row row-cols-1 row-cols-lg-2 align-items-stretch g-4 py-5">
    {blogList}
    </div>
  </div>;
};

export default BlogList;
