import PageHeader from '@/Components/moduls/pageHeader/PageHeader'
import About from '@/Components/templates/index/About'
import React from 'react'

export default function index() {
  return (
    <div>
       <PageHeader pageName={'About Us'}/>
      <About/>
    </div>
  )
}
