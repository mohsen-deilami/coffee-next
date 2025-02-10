import React from 'react'
import PageHeader from '@/Components/moduls/pageHeader/PageHeader'
import Result from '@/Components/templates/search/Result'

export default function index() {
  return (
    <div>
       <PageHeader pageName={"Search"} />
       <Result/>
    </div>
  )
}
