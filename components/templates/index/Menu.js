import React from "react";

export default function Menu({ menus }) {
  console.log("menu:=>", menus);
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
                <div className="row align-items-center mb-5">
                  <div className="col-4 col-sm-3">
                    <img
                      className="w-100 rounded-circle mb-3 mb-sm-0"
                      src={menu.img}
                      alt=""
                    />
                    <h5 className="menu-price">{menu.price}$</h5>
                  </div>
                  <div className="col-8 col-sm-9">
                    <h4> {menu.title}</h4>
                    <p className="m-0">{menu.desc}</p>
                  </div>
                </div>
              ))}
          </div>
          <div className="col-lg-6">
            <h1 className="mb-5">Cold Coffee</h1>
            {menus
              ?.filter((items) => items.type === "cold")
              .slice(0, 3)
              .map((menu) => (
                <div className="row align-items-center mb-5">
                <div className="col-4 col-sm-3">
                  <img
                    className="w-100 rounded-circle mb-3 mb-sm-0"
                    src={menu.img}
                    alt=""
                  />
                  <h5 className="menu-price">{menu.price}$</h5>
                </div>
                <div className="col-8 col-sm-9">
                  <h4> {menu.title}</h4>
                  <p className="m-0">{menu.desc}</p>
                </div>
              </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
