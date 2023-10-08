const axios = require("axios");
const { Sequelize, Op } = require("sequelize");
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
  console.log(id)
  try {
    const countryOne = await Country.findOne({where: {id:{[Op.iLike]: id}}})
    if (!countryOne) {
      return res.status(404).json({ error: "Country not found" });
    }
    return res.status(200).json({success: countryOne});
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getCountryByName = async (req, res) => {
  const { name } = req.query;
  console.log(name);
  try {
    const names = await Country.findOne({where: {name:{
      [Op.iLike]: name}}})
    if (!names){
      return res.status(400).json({error: "Country not found"});
    } else {return res.status(200).json(names)}
    
  } catch (error) {
    }
};

module.exports = {
  getCountries,
  getCountriesById,
  getCountryByName,
};
