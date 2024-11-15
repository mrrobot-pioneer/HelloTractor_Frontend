import "../../assets/styles/global/product.css";
import tractor from "../../assets/images/tractor-1.png";

export default function () {
  return (
    <div className="product">
      <div className="product__top-ribbon flex">
        <span className="discount">
          Save <span> 16%</span>
        </span>
        <span className="save flex">
          <i className="fa-regular fa-heart" title="Save to favorites"></i>
        </span>
      </div>
      <img className="product__image" src={tractor} alt="tractor" />
      <h4 className="product__name">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, eligendi.
      </h4>
      <h5 className="product__price flex">
        <div className="marked-price">USD 12,000</div>
        <div className="discounted-price">USD 10,000</div>
      </h5>
      <div className="product__rating flex">
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-regular fa-star"></i>
      </div>
      <button className="btn-primary-alt add-to-cart">Add to Cart</button>
    </div>
  );
}
