import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import '../SocialLink.css';

const SocialLink = () => {

    return (
        <nav className="icon-bar">
            <a target="_blank" data-testid="linkedin-icon" href="https://www.linkedin.com/in/manjari-dhoundiyal" className="linkedin"><FaLinkedin /></a>
            <a target="_blank" data-testid="github-icon" href="https://github.com/manjari188" className="github"><FaGithub /></a>
            <a target="_blank" data-testid="youtube-icon" href="https://www.youtube.com/channel/UCAhZtpGA1W_F0j5jJG9s_PQ" className="youtube"><FaYoutube /></a>
        </nav>
    )

}

export default SocialLink

