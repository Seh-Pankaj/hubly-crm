import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer-section">
      <div className="logo-cont">
        <img src="logo.png" alt="logo" />
      </div>
      <div className="footer">
        <div className="col">
          <h4>Product</h4>
          <a href="/">Universal Checks</a>
          <a href="/">Payment Workflows</a>
          <a href="/">Observability</a>
          <a href="/">UpliftAI</a>
          <a href="/">Apps and Integrations</a>
        </div>
        <div className="col">
          <h4>Why Primer</h4>
          <a href="/">Expand to new markets</a>
          <a href="/">Boost payment success</a>
          <a href="/">Improve conversion rates</a>
          <a href="/">Reduce payments fraud</a>
          <a href="/">Recover revenue</a>
        </div>
        <div className="col">
          <h4>Developers</h4>
          <a href="/">Primer Docs</a>
          <a href="/">API Reference</a>
          <a href="/">Payment methods guide</a>
          <a href="/">Service status</a>
          <a href="/">Community</a>
        </div>
        <div className="col">
          <h4>Resources</h4>
          <a href="/">Blog</a>
          <a href="/">Success Stories</a>
          <a href="/">Newsroom</a>
          <a href="/">Terms</a>
          <a href="/">Privacy</a>
        </div>
        <div className="col">
          <h4>Company</h4>
          <a href="/">Careers</a>
        </div>
        <div className="socials-list">
          <a href="/">
            <img src="mail.png" alt="mail-icon" />
          </a>
          <a href="/">
            <img src="link.png" alt="LinkedIn-icon" />
          </a>
          <a href="/">
            <img src="x.png" alt="Twitter-icon" />
          </a>
          <a href="/">
            <img src="yt.png" alt="yt-icon" />
          </a>
          <a href="/">
            <img src="discord.png" alt="discord-icon" />
          </a>
          <a href="/">
            <img src="figma.png" alt="figma-icon" />
          </a>
          <a href="/">
            <img src="insta.png" alt="insta-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};
export default Footer;
