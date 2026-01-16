import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function People() {
    const { uri } = useParams();
    const [person, setPerson] = useState(null);

    useEffect(() => {
        if (!uri) return;

        fetch(`https://api.allorigins.win/raw?url=https://forbes-api.vercel.app/profile/${uri}`)
            .then(res => res.json())
            .then(personData => {
                setPerson(personData);
            })
            .catch(err => console.error(err));
    }, [uri]);

    if (!person) return <div style={{ color: "#cfe3ff" }}>Завантаження...</div>;

    return (
        <div style={{ color: "#cfe3ff", padding: "16px", maxWidth: "400px", background: "#0a1a33", borderRadius: "12px" }}>
            <h2>{person.name}</h2>
            <p>Occupation: {person.occupation}</p>
            <p>Net Worth: {person.netWorth.original}</p>
            <img src={person.photo} width={120} style={{ borderRadius: "50%", marginTop: "12px" }} />
        </div>
    );
}

export default People;