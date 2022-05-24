import Slider from '../components/slider';
import styles from './music.module.css';
import Fancy from '../assets/Fancy-showcase.png';
import SlowDance from '../assets/slowdance-showcase.png';
import LetMeSee from '../assets/letmesee-showcase.png';
import YouMe from '../assets/youme-showcase.png';
import PerfectTiming from '../assets/perfecttiming-showcase.png';
import ImageShowcase from '../components/imageShowcase';
import BackgroundPalm from '../assets/PALM-COLOURED.png';
import Logo from '../assets/titian-logo.png';
import PalmDown from '../assets/palm-down.png';

function Music() {
    const titianSongs = [
        {
            image: Fancy,
            soundcloud: 'https://soundcloud.com/titian19/titian-fancy',
            spotify: 'https://open.spotify.com/track/73Z3ikqV9OIvD6aY5TznmB?si=186ac93c321549c5',
            youtube: 'https://www.youtube.com/watch?v=gHW9zPZUxsQ',
            applemusic: 'https://music.apple.com/us/album/fancy-single/1499779868'
        },
        {
            image: SlowDance,
            soundcloud: 'https://soundcloud.com/titian19/titian-slow-dance-feat-jtajor',
            spotify: 'https://open.spotify.com/track/2KQ07wGYhu02t58CFpHzlZ?si=a1ef89d474f840fd',
            youtube: 'https://www.youtube.com/watch?v=_FowWZlGxfw',
            applemusic: 'https://music.apple.com/us/album/slow-dance-feat-j-tajor-single/1491132202'
        },
        {
            image: LetMeSee,
            soundcloud: 'https://soundcloud.com/titian19/titian-let-me-see-feat-jtajor',
            spotify: 'https://open.spotify.com/track/0vzdNil0bdnPulYn6hHz1A?si=4ad02129b3cd4bc7',
            youtube: 'https://www.youtube.com/watch?v=5jeSuruZLxw',
            applemusic: 'https://music.apple.com/us/album/let-me-see-feat-j-tajor-single/1516435949'
        },
        {
            image: YouMe,
            soundcloud: 'https://soundcloud.com/titian19/titian-you-me-ft-michelle',
            spotify: 'https://open.spotify.com/track/6dfdxG0X5VkeKIw5kpAX81?si=6774b5ab56ad4fcb',
            youtube: 'https://www.youtube.com/watch?v=hghQcvxBoaU',
            applemusic: 'https://music.apple.com/us/album/you-me-feat-michelle-single/1487355601'
        },
        {
            image: PerfectTiming,
            soundcloud: 'https://soundcloud.com/titian19/tracks',
            spotify: 'https://open.spotify.com/track/4opQqtttyucHRK9Uky8yTR?si=70fefdf7b5324126',
            youtube: 'https://www.youtube.com/watch?v=kHALWDHTCtc',
            applemusic: 'https://music.apple.com/us/album/perfect-timing-single/1561098951'
        }

    ]
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>DISCOVER</h1>
            <img className={styles.palm} src={BackgroundPalm} />
            <img className={styles.logo} src={Logo} />
            <img className={styles.clock} src={PalmDown} />
            <Slider>
                <div className={styles.imageContainer}>
                    {
                        titianSongs.map((item, i) => {
                            return (
                                <ImageShowcase
                                    key={i}
                                    image={item.image}
                                    soundcloud={item.soundcloud}
                                    spotify={item.spotify}
                                    youtube={item.youtube}
                                    applemusic={item.applemusic}
                                />
                            )
                        })
                    }
                </div>
            </Slider>
            
        </div>
        
    )
}

export default Music;