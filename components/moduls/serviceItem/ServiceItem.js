import React from 'react'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/free-solid-svg-icons";
export default function ServiceItem({title , desc , img , icon}) {
  return (
    <div className="col-lg-6 mb-5">
    <div className="row align-items-center">
        <div className="col-sm-5">
            <img className="img-fluid mb-3 mb-sm-0" src={img} alt=""/>
        </div>
        <div className="col-sm-7">
            <h4><i className="service-icon">
              <FontAwesomeIcon
                icon={Icons[icon]}
                style={{ fontSize: "1rem", margin: "0,auto" }}
              /></i>  {title}</h4>
            <p className="m-0">{desc}</p>
        </div>
    </div>
</div>
  )
}
