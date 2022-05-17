import styles from './links.module.css';
import YouTube from '../assets/youtube.png';
import Spotify from '../assets/spotify.png';
import Soundcloud from '../assets/soundcloud.png';
import AppleMusic from '../assets/applemusic.png'

function Links() {
    return (
        <div className={styles.container}>
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/c/TITIANN19">
                <img src={YouTube} className={styles.logo} alt='YouTube'/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://open.spotify.com/artist/2dCBcAdLGA8lpfn03LPBWd">
                <img src={Spotify} className={styles.logo}  alt='Spotify'/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/titian19">
                <img src={Soundcloud} className={styles.logo}  alt='Soundcloud'/>
            </a>
            <a target="_blank" rel="noopener noreferrer" href="https://music.apple.com/us/artist/titian/1465827774">
                <img src={AppleMusic} className={styles.logo}  alt='Apple Music'/>
            </a>
        </div>
    )
}

export default Links;