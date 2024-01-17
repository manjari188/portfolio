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