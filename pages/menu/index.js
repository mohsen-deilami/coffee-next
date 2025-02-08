import PageHeader from '@/Components/moduls/pageHeader/PageHeader'
import Menu from '@/Components/templates/index/Menu'
import React from 'react'

export default function index() {
  return (
    <div>
  <PageHeader pageName={'Menu'}/>
    <Menu/>
    </div>
  )
}
