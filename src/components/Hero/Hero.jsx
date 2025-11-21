import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-main">
        <h1 className="hero-title">
          Grow Your Business Faster
          <br />
          with Hubly CRM
        </h1>
        <p className="hero-subtitle">
          Manage leads, automate workflows, and close deals effortlessly—all in
          one powerful platform.
        </p>

        <div className="hero-cta">
          <div className="cta-btn">Get started</div>
          <div className="play-btn">
            <img src="play.png" alt="Play Icon" />
            <span>Watch Video</span>
          </div>
        </div>
      </div>

      <div className="hero-images-cont">
        <div className="hero-image">
          <img src="hero-img.png" alt="Team meeting" />

          <div className="notification">
            <img src="jerry.png" width="34px" height="34px" alt="user-icon" />
            <div className="notification-text">
              <div>
                <strong>Jerry Calzoni</strong> joined <span>Swimming</span>
              </div>
              <div className="time">Class — 9:22 AM</div>
            </div>
          </div>

          <div className="calendar">
            <img src="calendar.png" alt="calendar-img" />
          </div>
          <div className="sales-img">
            <img src="sales.png" alt="sales-img" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
