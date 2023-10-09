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
router.post("/activities", (req, res) => {
  postActivities(req, res);
});

router.get("/activities", (req, res) => {
  getActivities(req, res);
});

router.get("/activities/:id", (req, res) => {
  getActivitiesById(req, res);
});

module.exports = router;
