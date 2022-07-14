import { footerLogos } from '../footerLogos';

const Footer = () => {
    return (<footer>
        {footerLogos.map((elo) => {
            return <img src={elo.icon}></img>
        })}
    </footer>);
}

export default Footer;