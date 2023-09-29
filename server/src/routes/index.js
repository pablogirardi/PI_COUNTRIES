const { Router } = require("express");
const {
  getCountries,
  getCountriesById,
  getCountrieByName,
} = require("../controllers/getCountries");
const { getActivities } = require("../controllers/getActivities");
const router = Router();

router.get("/countries", (req, res) => {
  getCountries(req, res);
});

router.get("/countries/:idPais", (req, res) => {
  getCountriesById(req, res);
});

router.get("/countries/:name", (req, res) => {
  getCountrieByName(req, res);
});

router.post("/activities", (req, res) => {
  postActivities(req, res);
});

router.get("/activities", (req, res) => {
  getActivities(req, res);
});

module.exports = router;
