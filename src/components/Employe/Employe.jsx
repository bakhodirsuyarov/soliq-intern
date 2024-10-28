import "./Employe.css";
import EmployeOne from "../../assets/teach-one.png";
import EmployeTwo from "../../assets/teach-two.png";
import EmployeThree from "../../assets/teach-three.png";
import EmployeFour from "../../assets/teach-four.png";
import EmployeFive from "../../assets/teach-five.png";
import EmployeSix from "../../assets/teach-six.png";
import EmployeSeven from "../../assets/teach-seven.png";
import EmployeBottom1 from "../../assets/teachs-one.svg";
import EmployeBottom2 from "../../assets/teachs-two.svg";
import EmployeBottom3 from "../../assets/teachs-three.svg";
import EmployeBottom4 from "../../assets/teachs-four.svg";
import EmployeBottom5 from "../../assets/teachs-five.svg";

const Employe = () => {
  return (
    <div className="employe">
      <div className="employe-wrapper container">
        <h3 className="employe-title">Bizning ustozlarimiz</h3>
        <ul className="employe-list">
          <li className="employe-item">
            <img src={EmployeOne} alt="" />
            <h4>Alisherova Anvara</h4>
            <div className="employe-item_bottom">
              <img src={EmployeBottom1} alt="" />
              <p>Dasturlash ustozi</p>
            </div>
          </li>
          <li className="employe-item">
            <img src={EmployeTwo} alt="" />
            <h4>Antota Nargiza</h4>
            <div className="employe-item_bottom">
              <img src={EmployeBottom2} alt="" />
              <p>UX/UI ustozi</p>
            </div>
          </li>
          <li className="employe-item">
            <img src={EmployeThree} alt="" />
            <h4>Jorayev Akbar</h4>
            <div className="employe-item_bottom">
              <img src={EmployeBottom3} alt="" />
              <p>Logistika ustozi</p>
            </div>
          </li>
          <li className="employe-item">
            <img src={EmployeFour} alt="" />
            <h4>Mamaraimov Grichka</h4>
            <div className="employe-item_bottom">
              <img src={EmployeBottom4} alt="" />
              <p>Marketing ustozi</p>
            </div>
          </li>
          <li className="employe-item">
            <img src={EmployeFive} alt="" />
            <h4>Zokir Malikov</h4>
            <div className="employe-item_bottom">
              <img src={EmployeBottom5} alt="" />
              <p>Videomontaj ustozi</p>
            </div>
          </li>
          <li className="employe-item">
            <img src={EmployeSix} alt="" />
            <h4>Anvara Xoliqova</h4>
            <div className="employe-item_bottom">
              <img src={EmployeBottom1} alt="" />
              <p>Dasturlash ustozi</p>
            </div>
          </li>
          <li className="employe-item">
            <img src={EmployeSeven} alt="" />
            <h4>Alisherova Anvara</h4>
            <div className="employe-item_bottom">
              <img src={EmployeBottom1} alt="" />
              <p>Dasturlash ustozi</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Employe;
