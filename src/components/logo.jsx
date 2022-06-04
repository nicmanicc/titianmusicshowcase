import styles from './logo.module.css';
import logo from '../assets/titianLogoBlack.png';
import {Link} from 'react-router-dom';

function Logo() {
    return (
        <div className={styles.container}>
            <Link to="/">
                <img src={logo} className={styles.logo}/>

            </Link>
        </div>
    )
}

export default Logo;