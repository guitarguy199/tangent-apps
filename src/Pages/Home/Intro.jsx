import "./Intro.css";
import introImg from './assets/analytics.jpeg';

const Intro = () => {
    return (
        <section className="home-intro">
        <div className="grid container">
        <div className="home-intro__text">
                <h1>Intro header</h1>
                <p>Intro text</p>
            </div>
        <img src={introImg} className="home-intro__img" />
        </div>
            

        </section>
    )
}

export default Intro;