import "../../assets/styles/home/home.css";
import { NavLink } from "react-router-dom";

import Hero from "./Hero";
import ProductsSwiper from "../../components/global/ProductsSwiper";

export default function Home() {
  return (
    <>
      {/* Hero section */}
      <Hero />

      {/* Hot deals - top discounts section */}
      <section className="home-swiper">
        <div className="title flex">
          <h2>Hot Deals - Limited Time Offers</h2>
          <NavLink to="" className="see-all flex">
            See all <i className="fa-solid fa-chevron-right"></i>
          </NavLink>
        </div>
        <ProductsSwiper />
      </section>

      {/* About us - mini section*/}
      <section class="why-choose-us">
        <div class="container">
          <h2>Why Choose Hello Tractor?</h2>
          <div class="columns">
            <div class="column">
              <i className="fa-solid fa-tags"></i>
              <h3>End-of-Year Sales</h3>
              <p>
                Take advantage of exclusive end-of-year sales with unbeatable
                discounts on top-rated tractors. Limited-time offers await!
              </p>
            </div>
            <div class="column">
              <i className="fa-solid fa-lock"></i>
              <h3>Secure Payments</h3>
              <p>
                Shop with confidence using our secure, encrypted payment
                options. Your safety is our priority. Pay with Paypal, Mpesa and
                Stripe.
              </p>
            </div>
            <div class="column">
              <i className="fa-solid fa-tractor"></i>
              <h3>Reliable After-Sales Support</h3>
              <p>
                We offer expert support and maintenance to keep your tractor
                running smoothly for years, from setup to operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New arrivals section */}
      <section className="home-swiper">
        <div className="title flex">
          <h2>New Listings - Fresh Arrivals</h2>
          <NavLink to="" className="see-all flex">
            See all <i className="fa-solid fa-chevron-right"></i>
          </NavLink>
        </div>
        <ProductsSwiper />
      </section>

      {/* Our categories section */}
      <section class="farm-categories">
        <div class="container">
          <h2>Top Categories - Farm Equipment </h2>
          <div class="categories">
            <div
              class="category flex-clmn"
              style={{ backgroundColor: "#fff3cd" }}
            >
              <div class="icon">
                <i className="fas fa-tractor"></i>
              </div>
              <h3>Tractors</h3>
              <p>
                Explore a wide range of tractors for all your farming needs,
                from compact to utility and specialty models.
              </p>
              <button className="btn-primary-alt">
                Shop Now <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>

            <div
              class="category flex-clmn"
              style={{ backgroundColor: "#d4f0f2" }}
            >
              <div class="icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h3>Farm Implements</h3>
              <p>
                Boost your tractor’s capabilities with farm implements like
                plows, seeders, and mowers for efficient farming.
              </p>
              <button className="btn-primary-alt">
                Shop Now <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>

            <div
              class="category flex-clmn"
              style={{ backgroundColor: "#dfe8fc" }}
            >
              <div class="icon">
                <i className="fas fa-seedling"></i>
              </div>
              <h3>Harvesting Equipment</h3>
              <p>
                Streamline harvest season with combine harvesters, balers, and
                more to maximize your yield.
              </p>
              <button className="btn-primary-alt">
                Shop Now <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>

            <div
              class="category flex-clmn"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div class="icon">
                <i className="fas fa-tint"></i>
              </div>
              <h3>Irrigation Systems</h3>
              <p>
                Maintain healthy crops with efficient irrigation systems, from
                sprinklers to drip solutions.
              </p>
              <button className="btn-primary-alt">
                Shop Now <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Best sellers section */}
      <section className="home-swiper">
        <div className="title flex">
          <h2>Best Sellers - Customers' Top Picks</h2>
          <NavLink to="" className="see-all flex">
            See all <i className="fa-solid fa-chevron-right"></i>
          </NavLink>
        </div>
        <ProductsSwiper />
      </section>

      {/* Training operators section */}
      <section className="training-operators">
        <div class="column left flex-clmn">
          <h3>Become a Certified Operator</h3>
          <p>
            Bridge the skills gap in mechanized farming with our comprehensive
            training program. Learn to operate and maintain advanced tractors
            with confidence and expertise. Our certification equips you for
            opportunities across the agricultural value chain, ensuring a longer
            lifespan for machinery and sustainable farming success.
          </p>
          <button className="btn-secondary">Join the Training</button>
        </div>

        <div class="column right flex-clmn">
          <h3>Hire a Qualified Operator</h3>
          <p>
            Don't worry about operating your machinery—we've got you covered!
            Our team of certified and experienced operators is ready to handle
            your tractors with precision and expertise, ensuring smooth
            operations and peace of mind. Focus on what matters most while we
            take care of the rest.
          </p>
          <button className="btn-secondary">Get a Qualified Operator</button>
        </div>
      </section>

      {/* Ecofriendly Tractors */}
      <section className="home-swiper">
        <div className="title flex">
          <h2>Go Green - Eco-Friendly Tractors</h2>
          <NavLink to="" className="see-all flex">
            See all <i className="fa-solid fa-chevron-right"></i>
          </NavLink>
        </div>
        <ProductsSwiper />
      </section>
    </>
  );
}
