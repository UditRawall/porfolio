import PhotoGrid from '../../share/PhotoGrid';
import './About.css';


const About = () => {
  return (
    <section className='about-main'>
        <div className='about-top'>
            <h2>About</h2>
            <p>A glimpse into me.</p>
            <PhotoGrid/>
            <div className='about-postcard'>

            </div>
        </div>
    </section>
  )
}

export default About