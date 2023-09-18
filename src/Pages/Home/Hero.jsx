import './Hero.css';
import Logo from '../../assets/tangentlogo.png';

const Hero = () => {
    return(
        <section className='hero'>
            <div className='grid container'>
                <img src={Logo} alt="Tangent Apps Logo" className='hero-image' />
            <div className='hero-text'>
                <h1>Hi, We&apos;re Tangent Apps</h1>
                <h2>A Modern Technology Consulting Agency</h2>
                <h2>Based in Denver, CO.</h2>
                <p>We build one-stop, intuitive technology solutions for small- to medium-sized businesses. We handle everything from web and app development to marketing, accounting, and customer relations technology, all with a focus on creating a one-stop solution which everyone in your organization can utilize with ease.</p>
                <div className='hero-buttons'>
                    <button className='button-primary'>Learn More</button>
                    <button className='button-primary'>See Our Services</button>
                </div>
            </div>
            </div>
        </section>
    )
}

export default Hero;