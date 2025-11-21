import "./Plans.css";

const Plans = () => {
  return (
    <section className="plans-section">
      <div className="plans-heading">
        <h2>We have plans for everyone!</h2>
        <p>
          We started with a strong foundation, then simply built all of the
          sales and marketing tools ALL businesses need under one platform.
        </p>
      </div>
      <div className="plans-cont">
        <div className="plans-box">
          <div>
            <h2 className="title">starter</h2>
            <p className="details">
              Best for local businesses needing to improve their online
              reputation.
            </p>
            <div className="pricing">
              <span>$199 </span>
              <span>/monthly</span>
            </div>
            <div className="benefits">
              <div className="ques">
                <strong>What's included</strong>
              </div>
              <div>
                <div className="point">
                  <img src="check.png" alt="check-icon" />
                  <span>Unlimited Users</span>
                </div>
                <div className="point">
                  <img src="check.png" alt="check-icon" />
                  <span>GMB Messaging</span>
                </div>
                <div className="point">
                  <img src="check.png" alt="check-icon" />
                  <span>Reputation Management</span>
                </div>
                <div className="point">
                  <img src="check.png" alt="check-icon" />
                  <span>GMB Call Tracking</span>
                </div>
                <div className="point">
                  <img src="check.png" alt="check-icon" />
                  <span>24/7 Award Winning Support</span>
                </div>
              </div>
            </div>
          </div>
          <a href="/subscribe">
            <div className="sub-btn">sign up for starter</div>
          </a>
        </div>
        <div className="plans-box">
          <div>
            <h2 className="title">Grow</h2>
            <p className="details">
              Best for all businesses that want to take full control of their
              marketing automation and track their leads, click to close.
            </p>
            <div className="pricing">
              <span>$399 </span>
              <span>/monthly</span>
            </div>
            <div className="benefits">
              <div className="ques">
                <strong>What's included</strong>
              </div>
              <div>
                <div className="point">
                  <img src="check.png" alt="check-icon" />
                  <span>Pipeline Management</span>
                </div>
                <div className="point">
                  <img src="check.png" alt="check-icon" />
                  <span>Marketing Automation Campaigns</span>
                </div>
                <div className="point">
                  <img src="check.png" alt="check-icon" />
                  <span>Live Call Transfer</span>
                </div>
                <div className="point">
                  <img src="check.png" alt="check-icon" />
                  <span>GMB Messaging</span>
                </div>
                <div className="point">
                  <img src="check.png" alt="check-icon" />
                  <span>Embed-able Form Builder</span>
                </div>
                <div className="point">
                  <img src="check.png" alt="check-icon" />
                  <span>Reputation Management</span>
                </div>
                <div className="point">
                  <img src="check.png" alt="check-icon" />
                  <span>24/7 Award Winning Support</span>
                </div>
              </div>
            </div>
          </div>
          <a href="/subscribe">
            <div className="sub-btn">sign up for grow</div>
          </a>
        </div>
      </div>
    </section>
  );
};
export default Plans;
