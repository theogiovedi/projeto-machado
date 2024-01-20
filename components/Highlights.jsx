import styles from "../styles/Highlights.module.css"

export default function Highlights() {
    return (
        <div className={styles.highlights}>
            <a className={styles.item} style={{backgroundColor: "#FFFF31"}} href="/vida">
                <div className={styles.tag}>
                    <div className={styles.text}>
                            <div className={styles.title}>Vida e morte de M.J. Gonzaga de Sá</div>
                        <div className={styles.author}>Lima Barreto</div>
                    </div>
                </div>
            </a>
            <a className={styles.item} style={{backgroundColor: "#31FF31"}} href="/vida">
                <div className={styles.tag}>
                    <div className={styles.text}>
                        <div className={styles.title}>Alice no País das Maravilhas</div>
                        <div className={styles.author}>Lewis Carroll</div>
                    </div>
                </div>
            </a>
            <a className={styles.item} style={{backgroundColor: "#31FFFF"}} href="/vida">
                <div className={styles.tag}>
                    <div className={styles.text}>
                        <div className={styles.title}>Carta ao El Rei D. Manuel</div>
                        <div className={styles.author}>Pero Vaz de Caminha</div>
                    </div>
                </div>
            </a>
            <a className={styles.item} style={{backgroundColor: "#3131FF"}} href="/vida">
                <div className={styles.tag}>
                    <div className={styles.text}>
                        <div className={styles.title}>Casa Velha</div>
                        <div className={styles.author}>Machado de Assis</div>
                    </div>
                </div>
            </a>
            <a className={styles.item} style={{backgroundColor: "#9831FF"}} href="/vida">
                <div className={styles.tag}>
                    <div className={styles.text}>
                        <div className={styles.title}>O Ateneu</div>
                        <div className={styles.author}>Raul Pompéia</div>
                    </div>
                </div>
            </a>
        </div>
    );
}
