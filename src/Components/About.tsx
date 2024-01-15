import '../About.css';

function About() {
    return (
        <section className="about-content">
            <div className='container'>
                <h1>About Me</h1>
                <div className="introduction-container">
                <p>
        I'm <span className="emphasize">Manjari Dhoundiyal</span>, a passionate Frontend Web Developer from India with a BTech degree in computer science. Specializing in crafting captivating Front-end experiences for Websites and Web Applications, I bring hands-on expertise in utilizing cutting-edge JavaScript libraries and frameworks, such as <span className="emphasize">Angular</span> and <span className="emphasize">React</span>.
      </p>
      <p>
        Eager to embark on new professional adventures, I am actively seeking job opportunities where I can contribute, learn, and thrive. If you have a compelling opportunity aligning with my skills and experience, feel free to reach out—I'm ready to make a meaningful impact!
      </p>
                </div>
            </div>
        </section>
    )
}

export default About