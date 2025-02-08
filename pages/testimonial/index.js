import PageHeader from "@/Components/moduls/pageHeader/PageHeader";
import Testimonial from "@/Components/templates/index/Testimonial";
import React from "react";

export default function index() {
  return (
    <div>
      <PageHeader pageName={"Reservation"} />
      <Testimonial />
    </div>
  );
}
