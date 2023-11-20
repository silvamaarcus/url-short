// Logo
import logo from "../../svg/logo-footer.svg";

// Icons
import icon_facebook from "../../svg/icon-facebook.svg"
import icon_pinterest from "../../svg/icon-pinterest.svg"
import icon_twitter from "../../svg/icon-twitter.svg"
import icon_instagram from "../../svg/icon-instagram.svg"

const Footer = () => {
  return (
    <>
      <div className="bg-footer">
        <section className="container py-5">
          <div className="row">
            <div className="grid-3 center">
              <a href="">
                <img
                  src={logo}
                  className="logo-footer"
                  alt="Shortly"
                />
              </a>
            </div>

            <div className="grid-6 flex menu-footer">
              <ul className="footer-list mr-3">
                <li className="bold color-white p4 mb-3">Features</li>
                <li>
                  <a href="">Link Shortening</a>
                </li>
                <li>
                  <a href="">Branded Links</a>
                </li>
                <li>
                  <a href="">Analytics</a>
                </li>
              </ul>

              <ul className="footer-list mr-3">
                <li className="bold color-white p4 mb-3">Resources</li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Developers</a>
                </li>
                <li>
                  <a href="">Support</a>
                </li>
              </ul>

              <ul className="footer-list">
                <li className="bold color-white p4 mb-3">Company</li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Our Team</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>

            <div className="grid-3 flex-end-row social-media">
              <a href="">
                <img src={icon_facebook} alt="Facebook" />
              </a>
              <a href="">
                <img src={icon_twitter} alt="Twitter" />
              </a>
              <a href="">
                <img src={icon_pinterest} alt="Pinterest" />
              </a>
              <a href="">
                <img src={icon_instagram} alt="Instagram" />
              </a>
            </div>
          </div>

          <div className="attribution text-center mt-2 color-gray">
            <p>
              {" "}
              Challenge by{" "}
              <a
                href="https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G"
                className="color-white"
                target="_blank"
              >
                Frontend Mentor
              </a>
              . Coded by{" "}
              <a
                href="https://github.com/silvamaarcus/url-short"
                className="color-white"
              >
                @silvamaarcus
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </>
  );
};
export default Footer;
