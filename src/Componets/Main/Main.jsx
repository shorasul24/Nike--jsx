import './Main.css';
import MainImg from '../../Assets/Images/main.jpg'
import IconImg1 from '../../Assets/Images/icon1.png'
import IconImg2 from '../../Assets/Images/icon2.png'
import IconImg3 from '../../Assets/Images/icon3.png'
import IconImg4 from '../../Assets/Images/icon4.png'

function Main() {
   return (
<main className="nike">
  <div className="container nike__info">
    <div className="nike__block">
      <img src={MainImg} alt="icon" />
      <h2 className="nike_title">Shoe Review: Nike React Infinity Run</h2>
      <p className="nike__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
        venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis
        leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque
        fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa
      </p>
    </div>
    <div className="nike_content">
      <div className="nike__item">
        <div><img src={IconImg1} alt="icon" /></div>
        <h2 className="nike_title block">
          Nike Air Max 270</h2>
        <p classname="nike__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
          luctus venenatis</p>
      </div>
      <div className="nike__item">
        <div><img src={IconImg2} alt="icon" /></div>
        <h2 className="nike_title block">
          Nike Air Max 270</h2>
        <p className="nike__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
          luctus venenatis</p>
      </div>
      <div className="nike__item">
        <div><img src={IconImg3} alt="icon" /></div>
        <h2 className="nike_title block">
          Nike Air Max 270</h2>
        <p className="nike__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
          luctus venenatis</p>
      </div>
      <div className="nike__item">
        <div><img src={IconImg4} alt="icon" /></div>
        <h2 className="nike_title block">
          Nike Air Max 270</h2>
        <p className="nike__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
          luctus venenatis</p>
      </div>
    </div>
  </div>
</main>


   )
}

export default Main;