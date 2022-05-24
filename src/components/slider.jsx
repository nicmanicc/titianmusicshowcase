import {useState, useRef} from 'react';
import styles from './slider.module.css';



function Slider(props) {
    const containerRef = useRef(null)
    const [mouseX, setMouseX] = useState(0.2);

    const mouseMovement = (e) => {
        setMouseX(e.pageX  / window.innerWidth * containerRef.current.offsetWidth - e.pageX  / 2); //Pos of mouse on screen in relation to container that contains links 
    }
    
    const scroll = { 
        transform: `translate(-${mouseX}px, 0%)` 
    };

    return (
        <div  ref={containerRef} onMouseMove={mouseMovement} style={scroll} className={styles.sliderContainer}>
            {props.children}
        </div>
    )
}

export default Slider;