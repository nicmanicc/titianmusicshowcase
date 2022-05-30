import BackgroundImageTitian from '../assets/titian-aboutme.png';
import Waveform from '../assets/waveform.png';
import styles from './about.module.css';
import Heading from '../components/heading';

function About() {
    return (
        <div>
            <img className={styles.backgroundImage} src={BackgroundImageTitian} />
            <Heading name='ABOUT'/>
            <div className={styles.bio}>
                <img className={styles.waveform} src={Waveform} />
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
    )
}

export default About;