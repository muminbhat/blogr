import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useParams } from "react-router-dom";


const BlogScreen = (props) => {
  
  const [blogScreen, setBlogScreen] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    props.setProgress(20);
    const fetchData = async () => {
      try{
        const res = await axios.get(`http://127.0.0.1:8000/blog/${id}/`);
        setBlogScreen(res.data);
        console.log(res.data)
      }
      catch (err) {

      }
      props.setProgress(100);
    }
    fetchData([id]);
    // eslint-disable-next-line
  }, [id]);

  return (
    <>
    <div className="container">

        <div className="col lg-6 overflow-hidden">
      <div className="px-4 py-5 my-5 text-center">
            <p>Read time: {blogScreen.read_time} min. | Author: {blogScreen.author} | Published on: {blogScreen.publish_time} | </p>
        <img
          className="d-block mx-auto mb-4 bl-hero"
          src={blogScreen.hero_image}
          alt=""
          width={1200}
          height={500}

        />
      </div>
      </div>
<div className="content">
      <h1>{blogScreen.title}</h1>
          {blogScreen.content}
          <br />
         
        </div>
      </div>
    </>
  );
};

export default BlogScreen;
