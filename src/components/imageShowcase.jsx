import styles from './imageShowcase.module.css';
import YouTube from '../assets/youtube.png';
import Spotify from '../assets/spotify.png';
import Soundcloud from '../assets/soundcloud.png';
import AppleMusic from '../assets/applemusic.png'

function ImageShowcase(props) {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={props.image} />
            <div className={styles.overlay}>
                <div className={styles.links}>
                    <a target="_blank" rel="noopener noreferrer" href={props.youtube}>
                        <img src={YouTube} className={styles.logo} alt='YouTube'/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href={props.spotify}>
                        <img src={Spotify} className={styles.logo}  alt='Spotify'/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href={props.soundcloud}>
                        <img src={Soundcloud} className={styles.logo}  alt='Soundcloud'/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href={props.applemusic}>
                        <img src={AppleMusic} className={styles.logo}  alt='Apple Music'/>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default ImageShowcase