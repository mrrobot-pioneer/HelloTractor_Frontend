import "../../assets/styles/home/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="banner flex-clmn one">
        <h3>
          <span>Sustainable</span> Tractors for Your <span>Ecosystem</span>
        </h3>
        <p>
          Eco-friendly, fuel-efficient, and designed to protect your land and
          future.
        </p>
        <button className="btn-primary">Buy Now</button>
      </div>

      <div className="banner flex-clmn two">
        <h3>
          <span>Innovation</span> Meets <span>Strength</span> in Tractors
        </h3>
        <p>
          Advanced technology and exceptional versatility for modern
          agricultural needs.
        </p>
        <button className="btn-primary">Buy Now</button>
      </div>

      <div className="banner flex-clmn three">
        <h3>
          <span>Tractors</span> Designed for <span>Easy</span> Operation"
        </h3>
        <p>
          Intuitive controls and effortless handling for stress-free farming
          tasks.
        </p>
        <button className="btn-primary">Buy Now</button>
      </div>
    </section>
  );
}
