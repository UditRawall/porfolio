import PhotoGrid from '../../share/PhotoGrid';
import './About.css';
import AboutSection from './temp/AboutSection';
import ConnectSection from './temp/ConnectSection';
import WorkExperience from './temp/WorkExperience';


const About = () => {
  return (
    <section className='about-main'>
        <div className='about-top'>
            <h2 className='text-white text-2xl'>About</h2>
            <p>A glimpse into me.</p>
            <div className='about-postcard'>
            <PhotoGrid/>

            </div>
        <AboutSection/>
        <ConnectSection/>
        <WorkExperience/>
        </div>
    </section>
  )
}

export default About