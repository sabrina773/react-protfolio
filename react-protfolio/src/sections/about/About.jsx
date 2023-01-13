import AboutImage from '../../assets/about.jpeg'
import  './about.css'
import CV from '../../assets/Cv german.pdf'
import {AiOutlineDownload} from 'react-icons/ai'
import Card from '../../components/Card'
import data from './data'

const About = () => {
  return (
    <section id="about">
      <div className="container about_container">
        <div className="about_left">
          <div className="about_portrait">
            <img src={AboutImage} alt="About Img"/>
          </div>
        </div>
        <div className="about_right">
          <h2>About me</h2>
          <div className="about_cards">
             {
              data.map(item =>(
                <Card key={item.id} className="about_card">
                  <span className="about_card-icon">{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              ))
             }
          </div>
          <p>I am Sabrina Ahamed. Innovative ,optimised solution seeker. Excited to be at the deployment face of my new career as a web developer. I would like to jump at any opportunity to continue growing my skill set in the web developing field at full stack web developer.</p>
          <a href={CV} download className='btn primary'>Download CV
           <AiOutlineDownload/> </a>
        </div>
      </div>
    </section>
  )
}

export default About
