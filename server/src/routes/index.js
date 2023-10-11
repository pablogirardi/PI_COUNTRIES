const { Router } = require("express");
const {
  getCountries,
  getCountriesById,
  getCountryByName,
} = require("../controllers/getCountries");
const {
  getActivities,
  postActivities,
  getActivitiesById,
} = require("../controllers/getActivities");
const router = Router();

//countries
router.get("/countries/name", getCountryByName);

router.get("/countries", getCountries);

router.get("/countries/:id", getCountriesById);

//activities
router.post("/activities", postActivities);

router.get("/activities", getActivities);

router.get("/activities/:id", getActivitiesById);

module.exports = router;
