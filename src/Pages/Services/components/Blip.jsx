import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Blip.css';

const Blip = ( { blip }) => {
    return(
        <article className='blip'>
            <FontAwesomeIcon className="blip-icon" icon={blip.icon} />
            <h3>{blip.title}</h3>
            <p>{blip.desc}</p>
        </article>

    )
}

export default Blip;