import "./Btn.css";
import Arrow from "../../assets/arrow-right.svg";

const Btn = () => {
  return (
    <div className="btn-wrapper">
      <button className="btn">
        Batafsil
        <span>
          <img src={Arrow} alt="" />
        </span>
      </button>
    </div>
  );
};

export default Btn;
