import './Header.css';
import Logo from '../../Assets/Images/logo.png';

function Header () {
   return (
      <header className="header">
  <nav className="header__nav">
    <div className="container header__block">
      <div>
        <img src={Logo} alt="Nike Logo" /> 
      </div>
      <ul className="header__list">
        <li><a href="#!" className="header_link">Кроссовки</a></li>
        <li><a href="#!" className="header_link">Кеды</a></li>
        <li><a href="#!" className="header_link">Футболки</a></li>
        <li><a href="#!" className="header_link">Шорты</a></li>
        <li><a href="#!" className="header_link">Майки</a></li>
        <li><a href="#!" className="header_link">Олимпийки</a></li>
        <li><a href="#!" className="header_link">Толстовки</a></li>
      </ul>
    </div>
  </nav>
  <div className="header__content">
    <h1 className="header__title">NIKE</h1>
    <p className="header__text">Крутые кроссовки от <b className="header__text--nike">NIKE</b> для вас </p>
  </div>
</header>
   )
} 

export default Header;