import "./Contact.css";
import ContactImg from "../../assets/contact-img.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-wrapper container">
        <div className="contact-left">
          <h3 className="contact-title">Tanlovda yordam beramis!</h3>
          <p>
            Kurs haqida savollaringiz bolsa yoki nimani tanlashni bilmasangiz,
            raqamingizni qoldiring - biz barcha savollaringizga javob beramiz.
          </p>
          <img src={ContactImg} alt="" />
        </div>
        <div className="contact-right">
          <form>
            <input className="input-top" type="text" placeholder="Ismingiz" />
            <div>
              <input
                className="input-bottom"
                type="number"
                placeholder="Telefon nomeringiz"
              />
              <input
                className="input-bottom"
                type="email"
                placeholder="Pochtangiz"
              />
            </div>
            <button>Yuborish</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
