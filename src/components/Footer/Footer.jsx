import "./Footer.css";
import logo from "../../assets/site-logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper container">
        <div className="footer_top">
          <img src={logo} alt={"logo"} />

          <ul className="footer_top_wrapper">
            <li className="footer_top_item">
              <h5>Manzil</h5>
              <p className="footer-top_content">
                Toshkent shahri, Yunusobod tumani, koch. Amir Temur 129B
              </p>
            </li>
            <li className="footer_top_item">
              <h5>Yordam</h5>
              <a href="tel:+998917775411">+998 91 7775411</a>
            </li>
            <li className="footer_top_item">
              <h5>Pochta</h5>
              <p>Info@farobiy.com</p>
            </li>
          </ul>
        </div>

        <div className="footer_main">
          <div className="footer_main_left">
            <p>
              Biz sizga mahsulot sotish uchun bu yerda emasmiz, biz tajribamiz
              orqali <br /> qiymat sotamiz.
            </p>
          </div>

          <div className="footer_main_right">
            <a href={"/"}>Facebook</a>
            <a href={"/"}>Twitter</a>
            <a href={"/"}>Telegram</a>
            <a href={"/"}>Instagram</a>
          </div>
        </div>

        <div className="footer_bottom">
          <p>
            © 2022 by <a href="https://www.fido.studio/">Fido Studio.</a>{" "}
            Farobiy IT Academy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
