import styles from './heading.module.css';

function Heading(props) {
    return (
        <>
             <h1 className={styles.heading}>{props.name}</h1>
        </>
    )
}

export default Heading;