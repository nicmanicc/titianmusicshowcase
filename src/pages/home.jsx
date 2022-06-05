import {useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import Slider from '../components/slider';
import styles from './home.module.css';
import bgImg from '../assets/titian-studio.jpg';
import bgImg2 from '../assets/titian2.jpg';
import bgImg3 from '../assets/titian-studio-1.jpg';
import BackgroundPalm from '../assets/palm.png';
import Clock from '../assets/clock.png';
import Logo from '../components/logo';

function Home() {
    const [mousePos, setMousePos] = useState(0.2);
    const [image, setImage] = useState('about');
    
    const mouseMovement = (e) => {
            setMousePos(e.pageX / window.innerWidth); // Pos of mouse on whole screen
    }

    const [xR, xG, xB] = [245, 159, 160]; //Background color starting from the left
    const [r, g, b] = [xR-51, xG-197, xB-195]; //get differences between rgb values
    const changeBackground = { //change background color from RGB: (245, 159, 160) to RGB: (51, 197, 195)
        backgroundColor: `rgb(${xR - r * mousePos}, ${xG - g * mousePos}, ${xB - b * mousePos})`
    };
    //Change background image when the mouse enters certain section of screen
    const setBackgroundImage = (identifier) => {
        switch (identifier) {
            case 'about':
                setImage(identifier);
                break;
            case 'music':
                setImage(identifier);
                break;
            case 'contact':
                setImage(identifier);
                break;
            default:
                setImage('about');
        }
    }

    return (
        <div onMouseMove={mouseMovement} style={changeBackground} className={styles.container}>
            <Logo />
            <img className={styles.palm} src={BackgroundPalm} />
            <img className={styles.clock} src={Clock} />
            <img style={{opacity: image === 'about' ? '0.4' : '0' }} className={styles.backgroundImage} src={bgImg} />
            <img style={{opacity: image === 'music' ? '0.4' : '0' }} className={styles.backgroundImage} src={bgImg2} />
            <img style={{opacity: image === 'contact' ? '0.4' : '0' }} className={styles.backgroundImage} src={bgImg3} />
            
            <Slider>
                <div  className={styles.linkContainer}>
                    <Link onMouseOver={() => setBackgroundImage('about')} className={styles.link} to="/about">ABOUT</Link>
                    <h1 className={styles.subTitleTop}>WRITTEN</h1>
                    <h1 className={styles.subTitleBottom}>PRODUCED</h1>
                </div>
                
                <div className={styles.linkContainer}>
                    <Link onMouseOver={() => setBackgroundImage('music')} className={styles.link} to="/music">MUSIC</Link>
                    <h1 className={styles.subTitleTop}>BY</h1>
                    <h1 className={styles.subTitleBottom}>BY</h1>
                </div>
                
                <div className={styles.linkContainer}>
                    <Link onMouseOver={() => setBackgroundImage('contact')} className={styles.link} to="/contact">CONTACT</Link>
                    <h1 className={styles.subTitleTop2}>TITIAN</h1>
                    <h1 className={styles.subTitleBottom2}>J.TAJOR</h1>
                </div>
            </Slider>

        </div>
    )
}

export default Home;