import img from './assets/services-hero.png';
import './ServicesHero.css'

const ServicesHero = () => {
    return (
            <section className="services-hero">
            <img src={img} className='services-hero-img' />
                <div className="services-hero-text">
                    <h2>Modern, Efficient Technology Solutions</h2>
                </div>
            </section>
    )
}

export default ServicesHero;