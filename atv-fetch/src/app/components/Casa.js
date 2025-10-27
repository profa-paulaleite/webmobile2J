const Casa = ({ casa }) => {
    return (
        <li key={casa.id}>
            <strong> {casa.name} </strong><br/>
                <span>
                    <p> Cores: </p>
                    {casa.houseColours}
                    <br/>
                </span>
                <span>
                    <p> Fundador: </p>
                    {casa.founder}
                    <br/>
                </span>
                <span>
                    <p> Animal: </p>
                    {casa.animal}
                    <br/>
                </span>
                <br/>
            </li>
    )
}

export default Casa