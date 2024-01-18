import { Container, Row, Col } from "react-bootstrap";
import '../Home.css';
import TypewriterString from "./Typewriter-String";
import About from "./About";
import { ForwardedRef } from "react";
import Projects from "./Projects";
import { projectInterface } from "../modal/projectInterface";

interface IntermediateChildProps {
    forwardedRef: ForwardedRef<HTMLDivElement | null>;
    targetProjectRef: ForwardedRef<HTMLDivElement | null>;
    skills: Array<string>;
    projects: Array<projectInterface>;
  }

  const Home: React.FC<IntermediateChildProps> = ({ forwardedRef, targetProjectRef, skills, projects }) => {
    return (
        <>
            <Container className="home-content">
                <Row>
                    <Col md={7} className="home-header">
                        <h1 className="home-hello">Hello! 👋</h1>
                        <h1>I'm <strong>Manjari Dhoundiyal </strong></h1>
                        <TypewriterString data={[
                            "Software Engineer",
                            "Frontend Developer",
                            "Freelancer"
                        ]} />
                    </Col>
                    <Col md={5} style={{ paddingBottom: 20 }}>
                        <img className="home-image" src={window.location.origin + '/portfolio/images/Coding-amico.png'}></img>
                    </Col>
                </Row>
            </Container>
            <About ref={forwardedRef} skills={skills}></About>
            <Projects projects={projects} ref={targetProjectRef}></Projects>
        </>
    )
}


export default Home