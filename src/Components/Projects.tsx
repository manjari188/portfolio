import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Projects.css'
import { useEffect } from 'react';

function Projects() {

    const projects = [
        {
            name: 'Portfolio Website',
            description: 'My personal portfolio website which showcases my resume along with the projects which I am working on.',
            image: '/portfolio/images/portfolio-thumbnail.png'
        },
        {
            name: 'Weather App',
            description: 'This is a weather application created using Vite and TypeScript React. It allows you to search for a location and view its weather details on the dashboard.',
            image: '/portfolio/images/weather-thumbnail.png'
        },

        {
            name: 'AI Intent',
            description: 'This App allows users to get an overview over all the pretrained intents that are available from intents.json. Users can see at least one example expression without any extra clicks and can select/unselect intents individually or all at once.',
            image: '/portfolio/images/AIIntent-thumbnail.png'
        },
        {
            name: 'Mile Calculator',
            description: 'This is an interactive App which allows users to calculate car range per charge on the basis of average speed, outside temperature, wether A/C is turned on and wheel size.',
            image: '/portfolio/images/Milescalculator-thumbnail.png'
        },

    ]
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section className='project-section'>
            <div className='container'>
                <h1>Projects</h1>

                {projects.map((project, index) => <div key={index} className={index % 2 === 0 ? 'row' : 'row right'}>
                    <div className="item" data-aos="fade-up">
                        <div className='project-detail'>
                            <div className='project-detail-layout'>
                                <div className='project-image'>
                                    <img src={project.image}></img>
                                </div>
                                <div className='project-details'>
                                    <h3>{project.name}</h3>
                                    <div className='project-desc'>{project.description}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)}
            </div>
        </section>
    )
}

export default Projects