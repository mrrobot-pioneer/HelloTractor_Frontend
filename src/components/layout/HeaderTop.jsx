import "../../assets/styles/header/header-top.css";
import logo from "../../assets/icons/hello-tractor-logo.png";

export default function HeaderTop() {
  return (
    <div className="header-top flex">
      <div className="logo" title="Home">
        <img src={logo} alt="Hello Tractor Logo" />
      </div>
      <div className="search-wrapper flex">
        <input type="search" placeholder="Search tractors, parts, operators" />
        <button className="search-button flex" title="Search">
          <i className="bx bx-search"></i>
        </button>
      </div>

      <div className="header-right flex">
        <div className="buttons flex">
          <button className="sell btn-primary">Sell</button>
          <button className="hire btn-secondary">Hire Tractor</button>
        </div>
        <div className="cart flex" title="Cart">
          <i className="bx bx-cart-add"></i>
          <div className="cart-count flex">0</div>
        </div>
      </div>
    </div>
  );
}
