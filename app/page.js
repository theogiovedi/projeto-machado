"use client"

import books from "./books.json";
import styles from './page.module.css'
import Header from '../components/Header'
import Books from '../components/Books'
import Search from '../components/Search'
import Highlights from '../components/Highlights'
import { useState } from "react";

export default function Home() {
    const [search, setSearch] = useState("");

    const ids = [1, 3, 6, 8, 10]
    const highlights = books.filter(item => ids.includes(item.id));

    function handler(e) {
        setSearch(e.target.value);
    }

    return (
        <div>
            <Header />
            <div className={styles.section}>Destaques</div>
            <Highlights highlights={highlights} />
            <div className={styles.section}>Acervo</div>
            <Search handler={handler}/>
            <Books books={books} search={search}/>
        </div>
    );
}
