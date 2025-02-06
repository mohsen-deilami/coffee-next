import Service from '@/Components/templates/index/Service'
import React from 'react'

export default function index() {
  return (
    <div>
      <div className="container-fluid page-header mb-5 position-relative overlay-bottom">
        <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{minHeight: "400px"}}>
            <h1 className="display-4 mb-3 mt-0 mt-lg-5 text-white text-uppercase">Services</h1>
            <div className="d-inline-flex mb-lg-5">
                <p className="m-0 text-white"><a className="text-white" href="/">Home</a></p>
                <p className="m-0 text-white px-2">/</p>
                <p className="m-0 text-white">Services</p>
            </div>
        </div>
    </div>
    <Service/>
    </div>
  )
}
