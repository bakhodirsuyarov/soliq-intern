import "./Header.css";
import Star from "../../assets/header-star.svg";
import HeaderImg from "../../assets/hero-img.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-wrapper container">
        <div className="header-left">
          <h3 className="header-left_title">
            Zamonaviy IT oquv markazi{" "}
            <span>
              <img src={Star} alt="" />
            </span>
          </h3>
          <h2 className="header-left_content">
            Biz sizga <span>zamonaviy kasbni</span> organishga va ish
            boshlashingizga yordam beramiz
          </h2>
          <button className="header-left_btn">Kurslarni tanlash</button>
        </div>
        <div className="header-right">
          <img src={HeaderImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
