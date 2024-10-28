import { useState } from "react";
import "./Carusel.css";
import Image from "../../assets/add-circle.svg";

// eslint-disable-next-line react/prop-types
const Carusel = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="carusel-box">
      <div className="carusel-content" onClick={toggleAccordion}>
        <p className="carusel-question">{question}</p>
        <button className="carusel-btn">
          <img src={Image} alt="" />
        </button>
      </div>
      {isOpen && <div className="carusel-answer">{answer}</div>}
    </div>
  );
};

export default Carusel;
