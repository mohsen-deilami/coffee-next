import React from 'react'

export default function about() {
  return (
    <div>
   


    <div className="container-fluid p-0 nav-bar">
        <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
            <a href="index.html" className="navbar-brand px-lg-4 m-0">
                <h1 className="m-0 display-4 text-uppercase text-white">Next-Coffee</h1>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                <div className="navbar-nav ml-auto p-4">
                    <a href="index.html" className="nav-item nav-link">Home</a>
                    <a href="about.html" className="nav-item nav-link active">About</a>
                    <a href="service.html" className="nav-item nav-link">Service</a>
                    <a href="menu.html" className="nav-item nav-link">Menu</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu text-capitalize">
                            <a href="reservation.html" className="dropdown-item">Reservation</a>
                            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                        </div>
                    </div>
                    <a href="contact.html" className="nav-item nav-link">Contact</a>
                </div>
            </div>
        </nav>
    </div>
  
    <div className="container-fluid page-header mb-5 position-relative overlay-bottom">
        <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{"min-height": "400px"}}>
            <h1 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase">About Us</h1>
            <div className="d-inline-flex mb-lg-5">
                <p className="m-0 text-white"><a className="text-white" href="">Home</a></p>
                <p className="m-0 text-white px-2">/</p>
                <p className="m-0 text-white">About Us</p>
            </div>
        </div>
    </div>
 


  
    <div className="container-fluid py-5">
        <div className="container">
            <div className="section-title">
                <h4 className="text-primary text-uppercase" style={{"letter-spacing": "5px"}}>About Us</h4>
                <h1 className="display-4">Serving Since 1950</h1>
            </div>
            <div className="row">
                <div className="col-lg-4 py-0 py-lg-5">
                    <h1 className="mb-3">Our Story</h1>
                    <h5 className="mb-3">Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea</h5>
                    <p>Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut. Labor diam sed ipsum et eirmod</p>
                    <a href="" className="btn btn-secondary font-weight-bold py-2 px-4 mt-2">Learn More</a>
                </div>
                <div className="col-lg-4 py-5 py-lg-0" style={{"min-height": "500px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100" src="img/about.png" style={{"object-fit": "cover"}}/>
                    </div>
                </div>
                <div className="col-lg-4 py-0 py-lg-5">
                    <h1 className="mb-3">Our Vision</h1>
                    <p>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>
                    <h5 className="mb-3"><i className="fa fa-check text-primary mr-3"></i>Lorem ipsum dolor sit amet</h5>
                    <h5 className="mb-3"><i className="fa fa-check text-primary mr-3"></i>Lorem ipsum dolor sit amet</h5>
                    <h5 className="mb-3"><i className="fa fa-check text-primary mr-3"></i>Lorem ipsum dolor sit amet</h5>
                    <a href="" className="btn btn-primary font-weight-bold py-2 px-4 mt-2">Learn More</a>
                </div>
            </div>
        </div>
    </div>
 



    <div className="container-fluid footer text-white mt-5 pt-5 px-0 position-relative overlay-top">
        <div className="row mx-0 pt-5 px-sm-3 px-lg-5 mt-4">
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-white text-uppercase mb-4" style={{"letter-spacing": "3px"}}>Get In Touch</h4>
                <p><i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
                <p><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                <p className="m-0"><i className="fa fa-envelope mr-2"></i>info@example.com</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-white text-uppercase mb-4" style={{"letter-spacing": "3px"}}>Follow Us</h4>
                <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
                <div className="d-flex justify-content-start">
                    <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-lg btn-outline-light btn-lg-square" href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-white text-uppercase mb-4" style={{"letter-spacing": "3px"}}>Open Hours</h4>
                <div>
                    <h6 className="text-white text-uppercase">Monday - Friday</h6>
                    <p>8.00 AM - 8.00 PM</p>
                    <h6 className="text-white text-uppercase">Saturday - Sunday</h6>
                    <p>2.00 PM - 8.00 PM</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-white text-uppercase mb-4" style={{"letter-spacing": "3px"}}>Newsletter</h4>
                <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
                <div className="w-100">
                    <div className="input-group">
                        <input type="text" className="form-control border-light" style={{"padding": "25px"}} placeholder="Your Email"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary font-weight-bold px-3">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid text-center text-white border-top mt-4 py-4 px-sm-3 px-md-5" style={{"border-color": "rgba(256, 256, 256, .1)"}}>
            <p className="mb-2 text-white">Copyright &copy; 
                <a className="font-weight-bold" href="#">Domain</a>. <a>All Rights Reserved.</a>
            </p>
            <p className="m-0 text-white">Designed by <a className="font-weight-bold" href="https://htmlcodex.com">HTML Codex</a></p>
        </div>
    </div>
    </div>
  
    
  )
}
