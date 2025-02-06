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
             icon="faTruck"
          />
          <ServiceItem
            title="Fresh Coffee Beans"
            img="img/service-2.jpg"
            desc={
              "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"
            }
             icon="faCoffee"
          />
          <ServiceItem
            title="Best Quality Coffee"
            img="img/service-3.jpg"
            desc={
              "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"
            }
              icon="faAward"
          />
          <ServiceItem
            title="Online Table Booking"
            img="img/service-3.jpg"
            desc={
              "Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"
            }
             icon="faTable"
          />

        </div>
      </div>
    </div>
  );
}

export async function getStaticProps(){
  const res = await fetch("")
  return{
    props:{
      data :{
        services
      }
    }
  }
}
