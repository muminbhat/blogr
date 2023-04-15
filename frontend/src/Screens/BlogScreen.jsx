import React from "react";
import Minimalist from "../Images/Minimalist.jpg";

const BlogScreen = () => {
  return (
    <>
    <div className="container">

        <div className="col lg-6 overflow-hidden">
      <div className="px-4 py-5 my-5 text-center">
            <p>20 min Read time | Mumin Bhat | Published on: 10:10:10 | </p>
        <img
          className="d-block mx-auto mb-4 bl-hero"
          src={Minimalist}
          alt=""
          width={1200}
          height={500}

        />
      </div>
      </div>
<div className="content">
      <h1>Minimalist</h1>
        <p>
          Many of us have tried to make positive changes in our lives, only to
          find ourselves slipping back into old habits. This blog post could
          offer practical advice on how to build healthy habits that actually
          stick, including setting achievable goals, tracking progress, and
          celebrating successes along the way.
          <br />
          <br />
          Many of us have tried to make positive changes in our lives, only to
          find ourselves slipping back into old habits. This blog post could
          offer practical advice on how to build healthy habits that actually
          stick, including setting achievable goals, tracking progress, and
          celebrating successes along the way.
          <br />
        </p>

        <h2>Many of us have tried to make positive changes in our lives</h2>
        <br />
        only to find ourselves slipping back into old habits. This blog post
        could offer practical advice on how to build healthy habits that
        actually stick, including setting achievable goals, tracking progress,
        and celebrating successes along the way.Many of us have tried to make
        positive changes in our lives, only to find ourselves slipping back into
        old habits. This blog post could offer practical advice on how to build
        healthy habits that actually stick, including setting achievable goals,
        tracking progress, and celebrating successes along the way.Many of us
        have tried to make positive changes in our lives, only to find ourselves
        slipping back into old habits. This blog post could offer practical
        advice on how to build healthy habits that actually stick, including
        setting achievable goals, tracking progress, and celebrating successes
        along the way.
        </div>
      </div>
    </>
  );
};

export default BlogScreen;
