import s from '../styles/Footer.module.scss'
const Footer = () => {
    return ( <div className={s.footer}>
       <em className={s.email}><a href="#">Napisz do mnie!</a></em>
    </div> );
}
 
export default Footer;