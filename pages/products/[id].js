import PageHeader from "@/Components/moduls/pageHeader/PageHeader";
import ProductDetail from "@/Components/templates/product/ProductDetail";
import Comments from "@/Components/templates/testimonial/Comments";
import React from "react";

export default function detail({ menuData , comments }) {

  return (
    <div>
      <PageHeader pageName={"Detail"} />
      <ProductDetail detail={menuData} />
      <Comments comments={comments}s/>
    </div>
  );
}
export async function getStaticPaths() {
  const menuResponse = await fetch("http://localhost:4000/menu");
  const menuData = await menuResponse.json();
  const paths = menuData.map((item) => ({ params: { id: String(item.id) } }));

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const { params } = context;
  const menuResponse = await fetch(`http://localhost:4000/menu/${params.id}`);
  const menuData = await menuResponse.json();

  const commentsResponse = await fetch(`http://localhost:4000/comments`);
  const commentsData = await commentsResponse.json();
  console.log('commentsData', commentsData)
  const comments= await commentsData.filter(comment => comment.productID === +params.id)
  console.log('commentResult', comments)

  return {
    props: {
      menuData,
      comments
    },
  };
}
