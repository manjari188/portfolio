import { Container, Row, Col } from "react-bootstrap";
import '../Home.css';
import TypewriterString from "./Typewriter-String";

function Home() {
    return (
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
                    <img style={{ position: 'relative', height: '60vh' }} src='/src/assets/Coding-amico.png'></img>
                </Col>
            </Row>
        </Container>
    )
}


export default Home