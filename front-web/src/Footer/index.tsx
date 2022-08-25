import './style.css';
import { ReactComponent as YouTubeIcon } from './youtube.svg';
import { ReactComponent as InstagramIcon } from './linkedin.svg';
import { ReactComponent as LinkedinIcon } from './instagram.svg';

function Footer () {
    return (
        <footer className="main-footer">
            App desenvolvida durante a 2ª ed. do evento Semana DevSuperior

            <div className="footer-icons">
                <a href="https://youtube.com" target="_new">
                    <YouTubeIcon />
                </a>
                <a href="https://instagram.com" target="_new">
                <InstagramIcon />
                </a>
                <a href="https://link.in">
                <LinkedinIcon />
                </a>
            </div>
        </footer>
    )
}

export default Footer;