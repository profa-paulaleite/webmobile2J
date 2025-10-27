"use client"
import { useEffect, useState } from "react"
import Casa from "../components/Casa"

export default function ClientSideHouses() {
    const [casas, setCasas] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://wizard-world-api.herokuapp.com/Houses")
            .then((res) => res.json())
            .then((dado) => {
                setCasas(dado)
                setLoading(false)
            })
    }, [])
    
    if (loading) return <p> Carregando... </p>

    return (
        <section>
            <h1> Casas HP (Client-Side) </h1>

            <ul>
                {casas.map((casa) => (
                    <Casa key={casa.id} casa={casa}/>
                ))}
            </ul>

        </section>
    )
}