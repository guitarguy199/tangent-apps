import './Services.css';
import ServicesBox from './ServicesBox';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    
    const services = [
        {
            title: 'Web Dev',
            icon: faCheckCircle,
            description: 'Lorem Ipsum'
        }
    ]

    return(
        <section className='home-services'>
            <div className='services-text'>
                <h3>What We Do</h3>
                <h4>If there&apos;s a gap in your biz</h4>
            </div>
            <div className='grid container services-grid'>
                {services.map((service, index) => 
                    <ServicesBox key={index} service={service} />
                )}
            </div>
        </section>
    )
}

export default Services;