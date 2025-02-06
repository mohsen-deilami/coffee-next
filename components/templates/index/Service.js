import ServiceItem from "@/Components/moduls/serviceItem/ServiceItem";
import React from "react";

export default function Service() {
  return (
    <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4
            className="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Our Services
          </h4>
          <h1 className="display-4">Fresh & Organic Beans</h1>
        </div>
        <div className="row">
          <ServiceItem
            title="Fastest Door Delivery"
            img="img/service-1.jpg"
            desc={
              "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"
            }
          />
          <ServiceItem
            title="Fresh Coffee Beans"
            img="img/service-2.jpg"
            desc={
              "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"
            }
          />
          <ServiceItem
            title="Best Quality Coffee"
            img="img/service-3.jpg"
            desc={
              "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"
            }
          />
          <ServiceItem
            title="Online Table Booking"
            img="img/service-3.jpg"
            desc={
              "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"
            }
          />

          {/*    <h4><i className="fa fa-truck service-icon"></i></h4>
                             <h4><i className="fa fa-coffee service-icon"></i></h4>
                      
                            <h4><i className="fa fa-award service-icon"></i></h4>
                            <h4><i className="fa fa-table service-icon"></i></h4> */}
        </div>
      </div>
    </div>
  );
}
