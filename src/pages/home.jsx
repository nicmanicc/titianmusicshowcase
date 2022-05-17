import {useState, useRef} from 'react';
import {Link} from 'react-router-dom';
import styles from './home.module.css';
import bgImg from '../assets/titian-studio.jpg';
import bgImg2 from '../assets/titian2.jpg';
import bgImg3 from '../assets/titian-studio-1.jpg';
import Logo from '../assets/titian-logo.png';
import BackgroundPalm from '../assets/palm.png';
import Clock from '../assets/clock.png';

function Home() {
    const containerRef = useRef(null)
    const [mouseX, setMouseX] = useState(0)
    const [mousePos, setMousePos] = useState(0.2);
    const [image, setImage] = useState('about');
    
    const mouseMovement = (e) => {
        setMouseX(e.pageX  / window.innerWidth * containerRef.current.offsetWidth - e.pageX  / 2); //Pos of mouse on screen in relation to container that contains links 
        setMousePos(e.pageX / window.innerWidth); // Pos of mouse on whole screen
    }

    const scroll = { 
        transform: `translate(-${mouseX}px, 0%)` 
    };

    const [xR, xG, xB] = [245, 159, 160]; //Background color starting from the left
    const [r, g, b] = [xR-51, xG-197, xB-195]; //get differences between rgb values
    const changeBackground = { //change background color from RGB: (255, 236, 206) to RGB: (213, 207, 235)
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
        <div style={changeBackground} className={styles.container}>
            <img className={styles.logo} src={Logo} />
            <img className={styles.palm} src={BackgroundPalm} />
            <img className={styles.clock} src={Clock} />
            <img style={{opacity: image === 'about' ? '0.4' : '0' }} className={styles.backgroundImage} src={bgImg} />
            <img style={{opacity: image === 'music' ? '0.4' : '0' }} className={styles.backgroundImage} src={bgImg2} />
            <img style={{opacity: image === 'contact' ? '0.4' : '0' }} className={styles.backgroundImage} src={bgImg3} />
            
            <div  ref={containerRef} onMouseMove={mouseMovement} style={scroll} className={styles.navContainer}>
                <div onMouseOver={() => setBackgroundImage('about')} className={styles.linkContainer}>
                    <Link to="/">ABOUT</Link>
                    <h1 className={styles.subTitleTop}>WRITTEN</h1>
                    <h1 className={styles.subTitleBottom}>PRODUCED</h1>
                </div>
                
                <div onMouseOver={() => setBackgroundImage('music')} className={styles.linkContainer}>
                    <Link to="/">MUSIC</Link>
                    <h1 className={styles.subTitleTop}>BY</h1>
                    <h1 className={styles.subTitleBottom}>BY</h1>
                </div>
                
                <div onMouseOver={() => setBackgroundImage('contact')} className={styles.linkContainer}>
                    <Link to="/">CONTACT</Link>
                    <h1 className={styles.subTitleTop}>TITIAN</h1>
                    <h1 className={styles.subTitleBottom}>J.TAJOR</h1>
                </div>
            </div>

        </div>
    )
}

export default Home;