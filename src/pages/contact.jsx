import styles from './contact.module.css';
import {AiOutlineMail, AiOutlinePhone} from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import Heading from '../components/heading';
import titianLogoBig from '../assets/titianLogoBig.png';
import Logo from '../components/logo';

function Contact() {
    return (
        <div className={styles.container}>
            <Logo />
            <span className={styles.fontColor}>
                <Heading name='CONTACT' />
            </span>
            <div className={styles.contactFormContainer}>
                <div className={styles.infoContainer}>
                    <img src={titianLogoBig} className={styles.logo} />
                    <div>
                        <AiOutlineMail className={styles.icon}/>
                        <p className={styles.contactInfo}>titiannheu@hotmail.com</p>
                    </div>
                    <div>
                        <AiOutlinePhone className={styles.icon}/>
                        <p className={styles.contactInfo}>0543 456 089</p>
                    </div>
                    <div>
                        <GoLocation className={styles.icon}/>
                        <p className={styles.contactInfo}>Melbourne, VIC.</p>
                    </div> 
                </div>
                <form id='contact' className={styles.contactForm}>
                    <input className={styles.smallInput} placeholder='Full Name' type='text' required/>
                    <input className={styles.smallInput} placeholder='Email' type='email' required/>
                    <textarea placeholder='Message' className={styles.bigInput} rows="20" cols="50" required></textarea>
                    <button form='contact' type='submit' className={styles.button}>Send</button>
                </form>
            </div>
        </div>
            
    )
}

export default Contact;