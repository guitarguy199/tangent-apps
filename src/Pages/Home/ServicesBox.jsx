import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ServicesBox.css';

// eslint-disable-next-line react/prop-types
const ServicesBox = ({ service }) => {
    return (
        <div className='services-box'>
        <FontAwesomeIcon icon={service.icon} />
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        </div>
    )
}

export default ServicesBox;