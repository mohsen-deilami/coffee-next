import PageHeader from '@/Components/moduls/pageHeader/PageHeader'
import Menu from '@/Components/templates/index/Menu'
import React from 'react'

export default function index({data}) {
  return (
    <div>
  <PageHeader pageName={'Menu'}/>
    <Menu menus={data.menus}/>
    </div>
  )
}

export async function getStaticProps(context) {
  const menuResponse = await fetch("http://localhost:4000/menu");
  const menuData = await menuResponse.json();

  return {
    props: {
    data: {
      menus:menuData,
    },
    revalidate: 60 * 60 * 12, // 43200 Second
  }
  };
}
