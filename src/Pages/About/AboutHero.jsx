import aboutImg from './assets/client-working.jpeg';

const AboutHero = () => {
    return (
        <section className="about-hero">
        <div className='grid container'>
            <div className="about-hero-text">
                <h1>About us</h1>
            </div>
            <img src={aboutImg} className='about-hero-img' />
        </div>

        </section>
    )
}

export default AboutHero;