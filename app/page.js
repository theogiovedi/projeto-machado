"use client"

import books from "./books.json";
import styles from './page.module.css'
import Header from '../components/Header'
import Books from '../components/Books'
import Search from '../components/Search'
import Highlights from '../components/Highlights'
import { useState } from "react";
import Dropdown from "../components/Dropdown";

export default function Home() {
    const [search, setSearch] = useState("");

    const ids = [1, 3, 6, 8, 10]
    const highlights = books.filter(item => ids.includes(item.id)); 

    let authors = [], universities = [], years = [];

    for (let i = 0; i < books.length; i++) {
        authors.push(books[i].author);
        for (let j = 0; j < books[i].universities.length; j++) {
            universities.push(books[i].universities[j].name);
            years.push(books[i].universities[j].start);
            years.push(books[i].universities[j].end);
        }
    }

    authors = authors.filter((item, index, list) => list.indexOf(item) == index).sort();
    universities = universities.filter((item, index, list) => list.indexOf(item) == index).sort();
    years = years.filter((item, index, list) => list.indexOf(item) == index).sort();

    authors.unshift("Qualquer autor");
    universities.unshift("Qualquer vestibular");
    years.unshift("Qualquer ano");

    const [author, setAuthor] = useState(authors[0]);
    const [university, setUniversity] = useState(universities[0]);
    const [year, setYear] = useState(years[0]);

    function handleSearch(e) {
        setSearch(e.target.value);
    }
    
    function handleAuthorFilter(e) {
        setAuthor(e.target.innerText);
    }
    
    function handleUniversityFilter(e) {
        setUniversity(e.target.innerText); 
    }

    function handleYearFilter(e) {
        setYear(e.target.innerText); 
    }

    return (
        <div>
            <Header />
            <div className={styles.section}>Destaques</div>
            <Highlights highlights={highlights} />
            <div className={styles.section}>Acervo</div>
            <Search handler={handleSearch}/>
            <div className={styles.filters}>
                <Dropdown selected={author} items={authors} handler={handleAuthorFilter} />
                <Dropdown selected={university} items={universities} handler={handleUniversityFilter} />
                <Dropdown selected={year} items={years} handler={handleYearFilter} />
            </div>
            <Books books={books} search={search} author={author == authors[0] ? ".*" : author} university={university == universities[0] ? ".*" : university} year={year == years[0] ? -1 : year} />
        </div>
    );
}
