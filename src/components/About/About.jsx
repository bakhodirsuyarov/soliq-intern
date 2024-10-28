import "./About.css";
import Like from "../../assets/like.svg";
import Medal from "../../assets/medal-star.svg";
import AboutImg1 from "../../assets/about1.png";
import AboutImg2 from "../../assets/about2.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-wrapper container">
        <h3>Biz haqimizda</h3>
        <div className="about-list">
          <div className="about-left">
            <div className="about-left_top">
              <img src={Like} alt="" />
              <p>
                Farobiy IT Academy - da biz oddiy korinadigan yaratish harakati
                odamlar hayotida osish.
              </p>
            </div>
            <div className="about-left_bottom">
              <img src={AboutImg2} alt="" />
            </div>
          </div>
          <div className="about-right">
            <div className="about-right_top">
              <img src={AboutImg1} alt="" />
            </div>
            <div className="about-right_bottom">
              <img src={Medal} alt="" />
              <p>
                Farobiy IT Academy - bu illyustratsiya, dizayn, fotografiya,
                video, freelancing va boshqa mavzularda ijodiy va qiziquvchan.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
