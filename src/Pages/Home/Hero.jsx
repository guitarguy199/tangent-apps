import './Hero.css';
import Logo from '../../assets/tangentlogo.png';

const Hero = () => {
    return(
        <section className='hero'>
            <div className='grid container'>
            <div className='hero-image'>
                <img src={Logo} alt="Tangent Apps Logo" />
            </div>
            <div className='hero-text'>
                <h1>Hi, We're Tangent Apps</h1>
                <h2>A Modern Techology Consulting Agency</h2>
                <h2>Based in Denver, CO.</h2>
                <p>text</p>
                <div className='hero-buttons'>
                    <button>Learn More</button>
                    <button>See Our Services</button>
                </div>
            </div>
               
            </div>
        </section>
    )
}

export default Hero;