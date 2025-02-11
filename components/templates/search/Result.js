import Card from '@/Components/moduls/card/Card'
import React from 'react'

export default function Result({menus}) {

  return (
    <div className="container-fluid pt-5 ">
         <div className="container">
           <div className="section-title">
             <h4
               className="text-primary text-uppercase"
               style={{ letterSpacing: "5px" }}
             >
               Menu & Pricing
             </h4>
             <h1 className="display-4">Competitive Pricing</h1>
           </div>
           <div className="row">
             <div className="col-lg-6">
               <h1 className="mb-5">Hot Coffee</h1>
               {menus
                 ?.filter((items) => items.type === "hot")
                 .slice(0, 3)
                 .map((menu) => (
                   <Card {...menu} key={menu.id}/>
                 ))}
             </div>
             <div className="col-lg-6">
               <h1 className="mb-5">Cold Coffee</h1>
               {menus
                 ?.filter((items) => items.type === "cold")
                 .slice(0, 3)
                 .map((menu) => (
                   <Card {...menu} key={menu.id}/>
                 ))}
             </div>
           </div>
         </div>
       </div>
  )
}


