import React from 'react'

export default function Result() {
  return (
    <div>
      search result
    </div>
  )
}

export async function getServerSideProps(context) {
    const {params , request , response , query}=context;
    console.log(query)
    return {
        props:{}
    }
}
