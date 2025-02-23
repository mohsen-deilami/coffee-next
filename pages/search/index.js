import React from "react";
import PageHeader from "@/Components/moduls/pageHeader/PageHeader";
import Result from "@/Components/templates/search/Result";
import Menu from "@/Components/templates/index/Menu";

export default function index({ data }) {
  return (
    <div>
      <PageHeader pageName={"Search"} />
      <Result menus={data.result} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;

  const res = await fetch("http://localhost:4000/menu");
  const data = await res.json();

  const result = data.filter(
    (item) =>
      item.type.includes(query.q.toLocaleLowerCase()) ||
      item.title.toLocaleLowerCase().includes(query.q.toLocaleLowerCase())
  );
  return {
    props: {
      data: {
        result,
      },
    },
  };
}
