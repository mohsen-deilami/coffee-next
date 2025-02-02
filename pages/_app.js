import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css"
export default function App({ Component, pageProps }) {
  return (
    <>
    
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
                    <a href="index.html" className="nav-item nav-link active">Home</a>
                    <a href="about.html" className="nav-item nav-link">About</a>
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
  
    <div className="container-fluid p-0 mb-5">
        <div id="blog-carousel" className="carousel slide overlay-bottom" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src="img/carousel-1.jpg" alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <h2 className="text-primary font-weight-medium m-0">We Have Been Serving</h2>
                        <h1 className="display-1 text-white m-0">COFFEE</h1>
                        <h2 className="text-white m-0">* SINCE 1950 *</h2>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src="img/carousel-2.jpg" alt="Image"/>
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <h2 className="text-primary font-weight-medium m-0">We Have Been Serving</h2>
                        <h1 className="display-1 text-white m-0">COFFEE</h1>
                        <h2 className="text-white m-0">* SINCE 1950 *</h2>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#blog-carousel" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#blog-carousel" data-slide="next">
                <span className="carousel-control-next-icon"></span>
            </a>
        </div>
    </div>
  
  <Component {...pageProps}/>

  <div className="container-fluid footer text-white mt-5 pt-5 px-0 position-relative overlay-top">
        <div className="row mx-0 pt-5 px-sm-3 px-lg-5 mt-4">
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-white text-uppercase mb-4" style={{letterSpacing: "3px"}}>Get In Touch</h4>
                <p><i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA</p>
                <p><i className="fa fa-phone-alt mr-2"></i>+012 345 67890</p>
                <p className="m-0"><i className="fa fa-envelope mr-2"></i>info@example.com</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-white text-uppercase mb-4" style={{letterSpacing: "3px"}}>Follow Us</h4>
                <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
                <div className="d-flex justify-content-start">
                    <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-twitter"></i></a>
                    <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a className="btn btn-lg btn-outline-light btn-lg-square" href="#"><i className="fab fa-instagram"></i></a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-white text-uppercase mb-4" style={{letterSpacing: "3px"}}>Open Hours</h4>
                <div>
                    <h6 className="text-white text-uppercase">Monday - Friday</h6>
                    <p>8.00 AM - 8.00 PM</p>
                    <h6 className="text-white text-uppercase">Saturday - Sunday</h6>
                    <p>2.00 PM - 8.00 PM</p>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 mb-5">
                <h4 className="text-white text-uppercase mb-4" style={{letterSpacing: "3px"}}>Newsletter</h4>
                <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
                <div className="w-100">
                    <div className="input-group">
                        <input type="text" className="form-control border-light" style={{padding: "25px"}} placeholder="Your Email"/>
                        <div className="input-group-append">
                            <button className="btn btn-primary font-weight-bold px-3">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid text-center text-white border-top mt-4 py-4 px-sm-3 px-md-5" style={{borderColor: "rgba(256, 256, 256, .1) !important"}}>
            <p className="mb-2 text-white">Copyright &copy; <a className="font-weight-bold" href="#">Domain</a>. All Rights Reserved.</p>
            <p className="m-0 text-white">Designed by <a className="font-weight-bold" href="https://htmlcodex.com">HTML Codex</a></p>
        </div>
        </div>
   
    </>
  )
}
