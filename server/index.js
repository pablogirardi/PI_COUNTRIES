const axios = require("axios");
const server = require("./src/server");
const { conn } = require("./src/db.js");
const { Country } = require("./src/db.js");
const PORT = 3001;

conn
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);

      const fetchData = async () => {
        try {
          const { data } = await axios("http://localhost:5000/countries");

          const countries = data.map((country) => ({
            //console.log(country.cca3),
            id: country.cca3,
            name: country.name.common,
            flagImg: country.flags.svg,
            continent: country.continents
              ? country.continents.length
                ? country.continents[0]
                : "Desconocido"
              : "Desconocido",
            capital: country.capital ? country.capital[0] : "Desconocida",
            subregion: country.subregion ? country.subregion : "Desconocida",
            area: country.area,
            population: country.population,
          }));

          return countries;
        } catch (error) {
          throw new Error(error.message);
        }
      };

      const SendToDB = async () => {
        try {
          const countries = await fetchData();
          await Country.bulkCreate(countries);
        } catch (error) {
          console.log("Error", error.message);
        }
      };
      SendToDB();
    });
  })
  .catch((error) => console.error(error));
