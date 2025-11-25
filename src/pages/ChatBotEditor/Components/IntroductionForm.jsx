import "./IntroductionForm.css";

const IntroductionForm = () => {
  return (
    <div className="edit-box">
      <div className="edit-title">Introduction Form</div>
      <div className="hubly-form">
        <div className="form-info">
          <div className="actual-form">
            <div>
              <label htmlFor="name">Your Name</label>
              <br />
              <input
                type="text"
                name="name"
                id="sample-name"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="phone">Your Phone</label>
              <br />
              <input
                type="text"
                name="phone"
                id="sample-phone"
                placeholder="+1 (000) 000-0000"
              />
            </div>
            <div>
              <label htmlFor="email">Your Email</label>
              <br />
              <input
                type="email"
                name="email"
                id="sample-email"
                placeholder="example@gmail.com"
              />
            </div>

            <div>
              <div className="submit-btn">Thank you!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IntroductionForm;
