import styles from "../../styles/Details.module.css";
import Cover from "../../components/Cover.jsx";
import Info from "../../components/Info.jsx";
import Header from "../../components/Header.jsx";

const Page = ({ params }) => {
    return (
        <div>
            <Header />
            <div className={styles.details}>
                <div className={styles.left}>
                    <Cover />
                </div>
                <div className={styles.right}>
                    <Info />
                </div>
            </div>
        </div>
    );
}

export default Page;
