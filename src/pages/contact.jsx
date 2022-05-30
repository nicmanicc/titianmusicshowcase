import styles from './contact.module.css';

import Heading from '../components/heading';

function Contact() {
    return (
        <>
            <Heading name='CONTACT' />
            <div className={styles.contactFormContainer}>
                <div className={styles.infoContainer}>
            
                </div>
                <form className={styles.contactForm}>
                    <input className={styles.smallInput} placeholder='Name' type='text' />
                    <input className={styles.smallInput} placeholder='Subject' type='text' />
                    <textarea placeholder='Description' className={styles.bigInput} rows="20" cols="50"></textarea>
                    <button className={styles.button}>Submit</button>
                </form>
            </div>
        </>
            
    )
}

export default Contact;