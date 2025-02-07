import React, { useState } from "react";

export default function Offer() {
  const [email, setEmail] = useState("");
  const [showAlert , setShowAlert]=useState(false)
  const sendHandler = async (event) => {
    event.preventDefault();
setShowAlert(false)
    const res = await fetch("http://localhost:4000/newsLetters", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    if(res.status=== 201){
setEmail('');
setShowAlert(true)
    }
  };
  return (
    <div className="offer container-fluid my-5 py-5 text-center position-relative overlay-top overlay-bottom">
      <div className="container py-5">
        <h1 className="display-3 text-primary mt-3">50% OFF</h1>
        <h1 className="text-white mb-3">Sunday Special Offer</h1>
        <h4 className="text-white font-weight-normal mb-4 pb-3">
          Only for Sunday from 1st Jan to 30th Jan 2045
        </h4>
        <form className="form-inline justify-content-center mb-4">
          <div className="input-group">
            <input
              type="text"
              className="form-control p-4"
              placeholder="Your Email"
              style={{ height: "60px", borderRadius: "0", minWidth: "320px" }}
              value={email}
              onChange={event=>setEmail(event.target.value)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-primary font-weight-bold px-4 "
                style={{ borderRadius: "0" }}
              
                onClick={()=>sendHandler(event)}
              >
              Join
              </button>
            </div>
            <br />
            </div>
            </form>
            {showAlert && (

<div className="alert alert-primary" role="alert" style={{width:"50%" , display:"inlineBlock"}}>


   <a href="#" class="alert-link"> Join successfully :))</a>
   <button style={{position: "absolute" , top: "0px",  right: "0px", border: "none",  background: "inherit"}} onClick={()=>setShowAlert(false)}>×</button>
</div>


            )
                }
      </div>
    </div>
  );
}
