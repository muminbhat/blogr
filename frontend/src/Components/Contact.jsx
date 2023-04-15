import React from 'react'

const Contact = () => {
  return (
<>
  <div className="b-example-divider" />
  <div className="container col-xl-10 col-xxl-8 px-4 py-5">
    <div className="row align-items-center g-lg-5 py-5">
      <div className="col-lg-7 text-center text-lg-start">
        <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
          Your Developing Partner
        </h1>
        <p className="col-lg-10 fs-4"> 
        I occasionally take on freelance opportunities.
        </p>
      </div>
      <div className="col-md-10 mx-auto col-lg-5">
        <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control text-black"
              id="floatingInput"
              placeholder="Name"
            />
            <label className='text-black' htmlFor="floatingInput">Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control text-black"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label className='text-black' htmlFor="floatingInput">Email address</label>
          </div>
          <div className="text-area form-floating mb-3">
            <textarea
            className="form-control text-black"
            >
            </textarea>
            <label className='text-black' htmlFor="floadingMessage">Message</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" defaultValue="remember-me" /> Newsletter
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-success" type="submit">
            Send
          </button>
          <hr className="my-4" />
          <small className="text-body-secondary">
            We will get back to you within 24 working hours.
          </small>
        </form>
      </div>
    </div>
  </div>
</>

  )
}

export default Contact