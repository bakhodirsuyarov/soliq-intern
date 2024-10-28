import "./Nav.css";
import SiteLogo from "../../assets/site-logo.svg";
import NavBook from "../../assets/Book.svg";
import Navcall from "../../assets/Call.svg";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-wrapper container">
        <div className="nav-left">
          <ul className="nav-left_list">
            <li className="nav-left_item">
              <a className="nav-left_link" href="!#">
                <img src={SiteLogo} alt="" />
              </a>
            </li>
            <li className="nav-left_item">
              <button>
                <p>kurslar</p>
                <span>
                  <img src={NavBook} alt="" />
                </span>
              </button>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <ul className="nav-right_list">
            <li className="nav-right_item">
              <a href="">Bizning ustozlarimiz</a>
            </li>
            <li className="nav-right_item">
              {" "}
              <a href="">Biz haqimizda</a>
            </li>
            <li className="nav-right_item">
              <select>
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
                <option value="en">EN</option>
              </select>
            </li>
            <li className="nav-right_item tell-item">
              <img src={Navcall} alt="" />
              <a href="tel:+998917775411">+998 91 7775411</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
