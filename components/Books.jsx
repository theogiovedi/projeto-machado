import styles from "../styles/Books.module.css" 

import Book from "../components/Book.jsx"

const Books = () => {
    return (
        <div className={styles.books}>
            <Book title="Vida e morte de M.J. Gonzaga de Sá" author="Lima Barreto" color="#FFFF31" link="/vida" />
            <Book title="Alice no País das Maravilhas" author="Lewis Carroll" color="#31FF31" link="/vida" />
            <Book title="Carta ao El Rei D. Manuel" author="Pero Vaz de Caminha" color="#31FFFF" link="/vida" />
            <Book title="Casa Velha" author="Machado de Assis" color="#3131FF" link="/vida" />
            <Book title="O Ateneu" author="Raul Pompéia" color="#9831FF" link="/vida" />
            <Book title="Tarde" author="Olavo Bilac" color="#FF31BA" link="/vida" />
            <Book title="A Ilustre Casa de Ramires" author="Eça de Queiroz" color="#FF3131" link="/vida" />
            <Book title="Marília de Dirceu" author="Tomás Antônio Gonzaga" color="#FF9831" link="/vida" />
        </div>
    );
}

export default Books;
