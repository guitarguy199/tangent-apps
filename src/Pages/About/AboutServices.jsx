import './AboutServices.css'
import ServiceCard from './ServiceCard';
import workImg from './assets/client-working.jpeg';

const AboutServices = () => {

    const services = [
        {
            img: workImg,
            name: "Web and App Development",
            description: "Lorem Ipsum",
        },
        {
            img: workImg,
            name: "Web and App Development",
            description: "Lorem Ipsum",
        },
        {
            img: workImg,
            name: "Web and App Development",
            description: "Lorem Ipsum",
        },
    ]


    return (
        <section className='about-services'>
            <h1>Our Services</h1>
            <div className='grid container'>
                {services.map((service, index) => 
                <ServiceCard key={index} service={service} />
                )}
            </div>
        </section>
    )
}

export default AboutServices;