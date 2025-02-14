import styles from "@/styles/Product.module.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const ProductsDetails = ({ detail }) => {

  return (
    <div
      className={`${styles.product_main}   align-items-center mb-5 text-decoration-none justify-content-center`}
    >
      <img
        className={`${styles.product_img}  mb-3 mb-sm-0`}
        src={detail.img}
        alt=""
      />
      <div style={{ width: "500px" }}>
        <h4 className="text-white mb-3">{detail.title}</h4>
        <hr style={{ borderColor: "white" }} />
        <div className={styles.stars}>
          {new Array(Math.floor(detail?.score)).fill(0).map((item, index) => (
            <FontAwesomeIcon
              className={styles.fill_star}
              icon={faStar}
              key={index}
            />
          ))}
         {new Array(5- Math.floor(detail?.score)).fill(0).map((item, index) => (
           <FontAwesomeIcon icon={faStar}  key={index}/>
          ))} 

          
        </div>
        <div className={styles.price_details}>
          {detail.off ? (
            <>
              <p>${detail.price - (detail.price * detail.off) / 100}</p>
              <p>${detail.price}</p>
            </>
          ) : (
            <p>${detail.price}</p>
          )}
        </div>
        <p style={{ color: "#fff" }} className="m-0 pr-5">
          {detail.desc}
        </p>
        <button className={styles.shopping_btn}>
          buy
          <FontAwesomeIcon className="ml-2" icon={faShoppingBag} />
        </button>
      </div>
    </div>
  );
};

export default ProductsDetails;
