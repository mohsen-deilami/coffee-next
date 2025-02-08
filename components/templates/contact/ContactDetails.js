import React, { useState } from "react";

export default function ContactDetails() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
    const [showAlert, setShowAlert] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();

    const res = await fetch("http://localhost:4000/messages", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, email, subject, body }),
    });
    if (res.status === 201) {
      setShowAlert(true);
    }
  };
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Contact Us
          </h4>
          <h1 className="display-4">Feel Free To Contact</h1>
        </div>
        <div className="row px-3 pb-2">
          <div className="col-sm-4 text-center mb-3">
            <i className="fa fa-2x fa-map-marker-alt mb-3 text-primary"></i>
            <h4 className="font-weight-bold">Address</h4>
            <p>123 Street, New York, USA</p>
          </div>
          <div className="col-sm-4 text-center mb-3">
            <i className="fa fa-2x fa-phone-alt mb-3 text-primary"></i>
            <h4 className="font-weight-bold">Phone</h4>
            <p>+012 345 6789</p>
          </div>
          <div className="col-sm-4 text-center mb-3">
            <i className="far fa-2x fa-envelope mb-3 text-primary"></i>
            <h4 className="font-weight-bold">Email</h4>
            <p>info@example.com</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 pb-5">
            <iframe
              style={{ width: "100%", height: "443px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
            
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
          <div className="col-md-6 pb-5">
            <div className="contact-form">
              <div id="success"></div>
              <form
                name="sentMessage"
                id="contactForm"
                noValidate="novalidate"
                onSubmit={submitHandler}
              >
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control bg-transparent p-4"
                    id="name"
                    placeholder="Your Name"
                    required="required"
                    data-validation-required-message="Please enter your name"
                    value={userName}
                      onChange={(event) => setUserName(event.target.value)}
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input
                    type="email"
                    className="form-control bg-transparent p-4"
                    id="email"
                    placeholder="Your Email"
                    required="required"
                    data-validation-required-message="Please enter your email"
                    
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control bg-transparent p-4"
                    id="subject"
                    placeholder="Subject"
                    required="required"
                    data-validation-required-message="Please enter a subject"
                    
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="control-group">
                  <textarea
                    className="form-control bg-transparent py-3 px-4"
                    rows="5"
                    id="message"
                    placeholder="Message"
                    required="required"
                    data-validation-required-message="Please enter your message"
                    
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div>
                  <button
                    className="btn btn-primary font-weight-bold py-3 px-5"
                    type="submit"
                    id="sendMessageButton"
                  >
                    Send Message
                  </button>
                </div>
              </form>
                </div>
              {showAlert && (
          <div
            className="alert alert-primary"
            role="alert"
            style={{ width: "50%", display: "inline-block" }}
          >
            <a href="#" className="alert-link">
              {" "}
              Message send successfully :))
            </a>
            <button
              style={{
                position: "absolute",
                top: "0px",
                right: "0px",
                border: "none",
                background: "inherit",
              }}
              onClick={() => setShowAlert(false)}
            >
              ×
            </button>
          </div>
        )}
            
          </div>
        </div>
      </div>
    </div>
  );
}
