import Casa from "../components/Casa"

export default async function ServerSideHouse() {
    const res = await fetch("https://wizard-world-api.herokuapp.com/Houses")
    const casas = await res.json()

    return (
        <section>
            <h1> Casas HP (Server-Side) </h1>

            <ul>
                {casas.map((casa) => (
                    <Casa key={casa.id} casa={casa}/>
                ))}
            </ul>

        </section>
    )
}