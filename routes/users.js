var express = require('express');
var router = express.Router();
const odds = require('../controllers/user.js')

/* GET Sports listing. */
router.get('/odds/sports', (req, res, next) => {
  odds
  .getSports()
  .then(resp => {
    //console.log(resp);
    res.send(resp)
  })
  .catch(error => res.send(error));
});

/* GET Odds listing. */
router.get('/odds/sports/odds', (req, res, next) => {
  const input = req.body;
  odds
  .getOdds(input.sport, input.regions, input.markets, input.oddsFormat)
  .then((resp => {
    res.send(resp)
  }))
  .catch(error => res.send(error));
});

/* GET Scores listing. */
router.get('odds/sports/scores', (req, res, next) => {
  const input = req.body;
  odds
  .getOdds(input.sport, input.daysFrom)
  .then((resp) => {
    res.send(resp)
  })
  .catch(error => res.send(error));
})

module.exports = router;
