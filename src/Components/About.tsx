import { ForwardedRef, forwardRef } from 'react';
import '../About.css';

interface TargetChildProps {
    skills: Array<string>
}


const About = forwardRef((props: TargetChildProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <section data-testid="aboutme" ref={ref} className="about-content">
            <div className='container'>
                <h1>About Me</h1>
                <div className='about-sections'>
                    <div className="introduction-container">
                        <p data-testid="aboutme-description">
                            I'm <span className="emphasize">Manjari Dhoundiyal</span>, a passionate Frontend Web Developer from India with a BTech degree in computer science. Specializing in crafting captivating Front-end experiences for Websites and Web Applications, I bring hands-on expertise in utilizing cutting-edge JavaScript libraries and frameworks, such as <span className="emphasize">Angular</span> and <span className="emphasize">React</span>.
                        </p>
                        <p>
                            Eager to embark on new professional adventures, I am actively seeking job opportunities where I can contribute, learn, and thrive. If you have a compelling opportunity aligning with my skills and experience, feel free to reach out—I'm ready to make a meaningful impact!
                        </p>
                    </div>
                    <div className="skills-container">
                        {props.skills.map((skill: string) => <div key={skill} className='skills'>{skill}</div>)}
                    </div>
                </div>

            </div>
        </section>
    )
})

export default About