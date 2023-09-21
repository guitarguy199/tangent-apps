import OurServices from "./OurServices";
import Projects from "./Projects";
import ServiceBlips from "./ServiceBlips";
import ServicesHero from "./ServicesHero";
import Testimonials from "./Testimonials";


const Services = () => {
    return(
        <>
            <ServicesHero />
            <ServiceBlips />
            <OurServices />
            <Projects />
            <Testimonials />
        </>

    )
}

export default Services;