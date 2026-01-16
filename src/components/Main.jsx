import React, {useEffect, useState} from 'react'
import styles from "../App.module.css";
import {Link} from "react-router-dom";

function Main() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://api.allorigins.win/get?url=https://forbes-api.vercel.app/list')
            .then(res => res.json())
            .then(data => {
                const parsed = JSON.parse(data.contents);

                const uris = parsed
                    .map(person => person.uri)
                    .filter(Boolean);

                setPeople(uris);
            })
            .catch(err => console.error(err))
    } , [])

    return (
        <div>
            <h1 className={styles.listTitle}>Forbes People URIs</h1>

            <ul className={styles.peopleList}>
                {people.length === 0 && (
                    <li className={styles.loading}>Завантаження...</li>
                )}

                {people.map((uri, index) => (
                    <li key={index} className={styles.personItem}>
                        <Link className={styles.personUri} to={`/person/${uri}`}>{uri}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Main
