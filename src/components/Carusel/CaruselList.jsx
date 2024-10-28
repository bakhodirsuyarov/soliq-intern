import "./Carusel.css";
import Carusel from "./Carusel";

const CaruselList = () => {
  const questions = [
    { question: "Farobiy IT Academy bu nima?", answer: "Bu IT o'quv markazi." },
    {
      question: "Farobiy IT Academy a'zoligimga nimalar kiradi?",
      answer: "Qo'shimcha resurslar va yordam.",
    },
    {
      question: "Farobiy IT Academy dan nimani o'rganishim mumkin?",
      answer: "Dasturlash va texnologiyalarni o'rganishingiz mumkin.",
    },
    {
      question: "Sinovim tugagandan keyin nima bo'ladi?",
      answer: "Sertifikat olish imkoniyati mavjud.",
    },
    {
      question: "Farobiy IT Academy da dars bera olamanmi?",
      answer: "O'qitish tajribangiz bo'lsa, imkoniyat bor.",
    },
  ];
  return (
    <div className="carusel">
      <div className="carusel-wrapper container">
        <h3>Frequently Asked Questions</h3>
        {questions.map((item, index) => (
          <Carusel key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

export default CaruselList;
