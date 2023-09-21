/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
    return (
        <article className='service-card'>
            <img src={service.img} alt={service.name} />
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <div className='card-footer'>
            <Link className='button-primary' to={"/services"}>Learn More</Link>
            </div>
        </article>
    )
}

export default ServiceCard;