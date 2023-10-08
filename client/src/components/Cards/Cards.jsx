import Card from "../Card/Card";

export default function Cards({countries}) {
    function onClose(id) {
        const charactersFiltered = characters.filter(
          (character) => character.id !== id
        );
        setCharacters(charactersFiltered);
      }
    return(
        <div className={style.container}>
            {countries.map((country) => {
                return(
                    <Card
                        key={country.id}
                        id={character.id}
                        name={country.name}
                        flagImg={country.flagImg}
                        continent={country.continent}
                        onClose={onClose}
                    />
                );
            })}
        </div>
    )
}