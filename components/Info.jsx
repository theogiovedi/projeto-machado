import styles from "../styles/Info.module.css"

const Info = () => {
    return (
        <div className={styles.info}>
            <div className={styles.id}>#1</div>
            <div className={styles.universities}>Unicamp (2024)</div>
            <div className={styles.links}>
                <a href="/1" className={styles.item}>Wikisource</a>
                <a href="/1" className={styles.item}>Portal Domínio Público (Universidade da Amazônia - UNAMA)</a>
                <a href="/1" className={styles.item}>Portal Domínio Público (Fundação Biblioteca Nacional)</a>
                <a href="/1" className={styles.item}>Portal Domínio Público (Biblioteca Virtual do Estudante Brasileiro / USP)</a>
                <a href="/1" className={styles.item}>Project Gutenberg</a>
            </div>
        </div>
    );
}

export default Info;
