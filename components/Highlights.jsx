import styles from "../styles/Highlights.module.css"
import Highlight from "../components/Highlight.jsx";

export default function Highlights({ highlights }) {
    return (
        <div className={styles.highlights}>
            {highlights.map(item => <Highlight id={item.id} title={item.title} author={item.author} color={item.color} key={item.id} />)}
        </div>
    );
}
