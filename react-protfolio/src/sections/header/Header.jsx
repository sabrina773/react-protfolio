import HeaderImage from '../../assets/logo.png'
import './header.css'
import data from './data'

const Header = () => {
  return (
    <header id="header">
      <div className="container header_container">
        <div className="header_profile">
          <img src={HeaderImage} alt="Header Portait"/>
        </div>
        <h3>SABRINA AHAMED</h3>
        <p>
          You are click away building your dream website or webapp .Send me the details of your project for a modern , mobile responsive, highly performant website today!
        </p>
        <div className="header_cta">
          <a href="#contact" className='btn primary'>Let's talk</a>
          <a href="#protfolio" className='btn light'>My Work</a>
        </div>
        <div className="header_socials">
          {
           data.map(item =>
            <a key={item.id} href={item.link} target="_blank" rel = "noopenner noreferrer">{item.icon}</a>)
          }
        </div>

      </div>
    </header>
  )
}

export default Header
