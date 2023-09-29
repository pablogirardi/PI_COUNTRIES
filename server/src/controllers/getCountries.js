const axios = require("axios");
const { Sequelize } = require("sequelize");
const { Country, Activity } = require("../db");

const getCountries = async (req, res) => {
  try {
    const countriesFind = await Country.findAll();
    res.status(200).json(countriesFind);
    await Country.create();
    // if (!countriesFind.length)
    //   return res.status(404).json({ country: "Not found" });
    // return res.status(200).json({ success: countriesFind });

    // const countries = await Country.findAll();
    // if (!countries) {
    //   return res.status(404).json({ error: "not found" });
    // }
    // return res.status(200).json({ success: countries });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getCountriesById = async (req, res) => {
  const { id } = req.params;
  try {
    const countryOne = await Country.findByPk(id, {
      include: Activity,
    });
    if (!countryOne) {
      return res.status(404).json({ error: "Country not found" });
    }
    return res.status(200).json(countryOne);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getCountryByName = async (req, res) => {
  const { name } = req.query;
  console.log(name);
  return res.status(200).json({
    name: success,
  });
};

module.exports = {
  getCountries,
  getCountriesById,
  getCountryByName,
};
