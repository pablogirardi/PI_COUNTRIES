const { Router } = require("express");
const {
  getCountries,
  getCountriesById,
  getCountryByName,
} = require("../controllers/getCountries");
const { 
  getActivities, 
  postActivities, 
  getActivitiesById 
} = require("../controllers/getActivities");
const router = Router();

//countries
router.get("/countries/name", (req, res) => {
  getCountryByName(req, res);
});

router.get("/countries", (req, res) => {
  getCountries(req, res);
});

router.get("/countries/:id", (req, res) => {
  getCountriesById(req, res);
});

//activities
router.post("/activities", (req, res) => {
  postActivities(req, res);
});

router.get("/activities", (req, res) => {
  getActivities(req, res);
});

router.get("/activities/:id", (req, res) => {
  getActivitiesById(req, res)
})

module.exports = router;
