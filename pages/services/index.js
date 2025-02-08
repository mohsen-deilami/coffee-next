import PageHeader from '@/Components/moduls/pageHeader/PageHeader'
import Service from '@/Components/templates/index/Service'
import React from 'react'

export default function index({data}) {
  return (
    <div>
     <PageHeader pageName={"services"}/>
    <Service services={data.services}/>
    </div>
  )
}

export async function getStaticProps(context) {
  const servicesResponse = await fetch("http://localhost:4000/services");
  const servicesData = await servicesResponse.json();

  return {
    props: {
    data: {
      services: servicesData,
    },
  }
  };
}