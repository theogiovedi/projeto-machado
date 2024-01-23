import styles from "../styles/Dropdown.module.css"

export default function Dropdown({ selected, items, handler }) {
    return (
        <button className={styles.dropdown}>
            <div className={styles.selected}>{selected}</div>
            <div className={styles.items}>
                {items.filter((item) => item != selected).map((item, index) => <div className={styles.item} key={index} onClick={handler}>{item}</div> )}
            </div>
        </button>
    );
}
