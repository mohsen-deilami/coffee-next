import PageHeader from "@/Components/moduls/pageHeader/PageHeader";
import Testimonial from "@/Components/templates/index/Testimonial";
import React from "react";

export default function index({ data }) {
  return (
    <div>
      <PageHeader pageName={"comments"} />
      <Testimonial comments={data.comments} />
    </div>
  );
}

export async function getStaticProps() {
  const commenytResponse = await fetch("http://localhost:4000/comments");
  const commentData = await commenytResponse.json();
  return {
    props: {
      data: {
        comments: commentData,
      },
    },
    revalidate: 60 * 60 * 12,
  };
}
