import './Footer.css';

function Footer() {
   return (
      <footer className="footer">
  <div className="container footer__container">
    <form className="footer_form">
      <input className="footer_input" type="text" placeholder="Введите свое имя" />
      <textarea className="footer_comment" placeholder="Сообщение" defaultValue={""} />
      <button className="footer__btn" type="submit">Отправить</button>
    </form>
    <ul className="footer__list">
      <li><a href="#!" className="footer__link"> Кроссовки </a></li>
      <li><a href="#!" className="footer__link"> Кеды </a></li>
      <li><a href="#!" className="footer__link"> Футболки </a></li>
      <li><a href="#!" className="footer__link"> Шорты </a></li>
      <li><a href="#!" className="footer__link"> Майки </a></li>
      <li><a href="#!" className="footer__link"> Олимпийки </a></li>
      <li><a href="#!" className="footer__link"> Толстовки </a></li>
    </ul>
  </div>
</footer>


   )
}

export default Footer;