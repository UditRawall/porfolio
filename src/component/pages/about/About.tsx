import PhotoGrid from '../../share/PhotoGrid';
import './About.css';
import AboutSection from './temp/AboutSection';
import ConnectSection from './temp/ConnectSection';


const About = () => {
  return (
    <section className='about-main'>
        <div className='about-top'>
            <h2>About</h2>
            <p>A glimpse into me.</p>
            <PhotoGrid/>
            <div className='about-postcard'>

            </div>
        <AboutSection/>
        <ConnectSection/>
        </div>
    </section>
  )
}

export default About