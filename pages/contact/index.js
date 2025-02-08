import React from 'react'
import ContactDetails from '@/Components/templates/contact/ContactDetails'
import PageHeader from '@/Components/moduls/pageHeader/PageHeader'

export default function index() {
  return (
  <div>
    <PageHeader pageName={"Contact"}/>
   <ContactDetails/>
   
  </div>
  )
}
