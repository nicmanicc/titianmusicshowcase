import BackgroundImageTitian1 from '../assets/titian-aboutme1.png';
import BackgroundImageTitian2 from '../assets/titian-aboutme2.png';
import styles from './about.module.css';
import Heading from '../components/heading';
import Logo from '../components/logo';
import headset from '../assets/headsetMic.png';

function About() {
    return (
        <div className={styles.container}>
            <Logo />
            <Heading name='ABOUT'/>
            <div className={styles.flexContainer}>
                <div className={styles.imageContainer}>
                    <img className={styles.headset} src={headset} />
                </div>
                
                <div className={styles.bio}>
                    <div className={styles.logoImageContainer}>
                        <img className={styles.backgroundImage2} src={BackgroundImageTitian2} />
                        <img className={styles.backgroundImage1} src={BackgroundImageTitian1} />
                    </div>
                    <h1 className={styles.subTitle}>LET THE <span className={styles.musicSpan}>MUSIC</span> TAKE YOU AWAY.</h1>
                    <p className={styles.para}>Songwriter & Producer, best known for his song 'Perfect Timing' originating from Melbourne, Victoria.</p>
                    <p className={styles.para}>Commonly known as TITIAN or PrinceT.</p>
                    <div className={styles.socialContainer}>
                        <a className={styles.socials} href='https://www.instagram.com/titiannheu/?hl=en'>INSTAGRAM ⋅ </a>
                        <a className={styles.socials} href='https://twitter.com/Titian_19'>TWITTER ⋅ </a>
                        <a className={styles.socials} href='https://www.facebook.com/Titian19'>FACEBOOK</a>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default About;