import Card from "../Card/Card";

export default function Cards({countries}) {
    return(
        <div className={style.cards}>
            {countries.map((country) => {
                return(
                    <Card
                        key={country.id}
                        id={country.id}
                        name={country.name}
                        flagImg={country.flagImg}
                        continent={country.continent}
                    />
                );
            })}
        </div>
    )
}