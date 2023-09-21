import { faToolbox } from '@fortawesome/free-solid-svg-icons';
import './ServiceBlips.css';
import Blip from './components/Blip';

const ServiceBlips = () => {

    const blips = [
        {
            icon: faToolbox,
            title: "Wide-Ranging Services",
            desc: "We pride ourselves on offering expertise on many levels of business technology. From development and design to marketing and HR - and everything in between - we are here to help optimize your business performance."
        },
        {
            icon: faToolbox,
            title: "Wide-Ranging Services",
            desc: "We pride ourselves on offering expertise on many levels of business technology. From development and design to marketing and HR - and everything in between - we are here to help optimize your business performance."
        },
        {
            icon: faToolbox,
            title: "Wide-Ranging Services",
            desc: "We pride ourselves on offering expertise on many levels of business technology. From development and design to marketing and HR - and everything in between - we are here to help optimize your business performance."
        },
    ]

    return(
        <section className='blips'>
        <h1>blah</h1>
        <div className='grid container blips-container'>
        {blips.map ((blip, index) => 
            <Blip blip={blip} key={index} />
        )}
        </div>
        
        </section>
    )
}

export default ServiceBlips;