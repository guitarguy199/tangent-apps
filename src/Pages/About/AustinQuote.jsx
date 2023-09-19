import './AustinQuote.css';
import austinImg from './assets/austin.jpeg';

const AustinQuote = () => {
    return (
            <section className='austin'>
                <div className='grid container'>
                    <img src={austinImg} className="austin-img" alt="Picture of Founder, Austin" />
                    <div className='austin-text'>
                        <h2>What Makes Us Different?</h2>
                    </div>
                </div>
            </section>
    )
}

export default AustinQuote;

