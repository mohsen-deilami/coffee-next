import PageHeader from "@/Components/moduls/pageHeader/PageHeader";
import Reservation from "@/Components/templates/index/Reservation";
import React from "react";

export default function index() {
  return (
    <div>
      <PageHeader pageName={"Reservation"} />
      <Reservation />
    </div>
  );
}
