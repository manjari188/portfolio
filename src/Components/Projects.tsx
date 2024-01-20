import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Projects.css'
import { ForwardedRef, forwardRef, useEffect } from 'react';
import { projectInterface } from '../modal/projectInterface';

interface TargetChildProps {
    projects: Array<projectInterface>
}

const Projects = forwardRef((props: TargetChildProps, ref: ForwardedRef<HTMLDivElement>) => {

    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <section data-testid="project" ref={ref} className='project-section'>
            <div className='container'>
                <h1>Projects</h1>

                {props.projects.map((project, index) => <div key={index} className={index % 2 === 0 ? 'row' : 'row right'}>
                    <div className="item" data-aos="fade-up">
                        <div className='project-detail'>
                            <div className='project-detail-layout'>
                                <div className='project-image'>
                                    <img alt={project.name} src={project.image}></img>
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
})

export default Projects