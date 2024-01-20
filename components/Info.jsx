import styles from "../styles/Info.module.css"

export default function Info({ id, universities, links }) {
    return (
        <div className={styles.info}>
            <div className={styles.id}>#{id}</div>
            <div className={styles.universities}>{
                universities.map((university) => university.name + " (" + (university.start == university.end ? university.start : (university.start + "-" + university.end)) + ")").join(", ")
            }</div>
            <div className={styles.links}>{
                links.map((link) => <a href={link.url} className={styles.item}>{link.name}</a>)
            }</div>
        </div>
    );
}
