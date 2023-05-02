// This folder is for the APIs, Business logic for the project
// Right now, contains APIS from the odds API (Rapid API)

const conf = require('../config/config.js')
const axios = requrie('axios').default;
require('dotenv').config();

const odds = {};

odds.getSports = () => {
    return new Promise((resolve, reject) => {
        return axios
            .get(
                conf.oddsConf.baseUrl + `/v4/sports/?apiKey=${process.env.ODDS_API_TOKEN}`
            )
            .then(resp => {
                resolve(resp)
            })
            .catch(err => reject(err))
    })
}

odds.getOdds = (sport, regions, markets, oddsFormat) => {
    return new Promise((resolve, reject) => {
        return axios
            .get(conf.oddsConf.baseUrl + `/v4/sports/${sport}/odds/?apiKey=${process.env.ODDS_API_TOKEN}
        &regions=${regions}&markets=${markets}&oddsForamt=${oddsFormat}`
            )
            .then(resp => {
                resolve(resp)
            })
            .catch(err => reject(err))
    })
}

odds.getScores = (sport, daysFrom) => {
    return new Promise((reject, resolve) => {
        return axios
            .get(
                conf.oddsConf.baseUrl + `/v4/sports/${sport}/scores/?apiKey=${process.env.ODDS_API_TOKEN}
        &daysFrom=${daysFrom}`
            )
            .then(resp => {
                resolve(resp)
            })
            .catch(err => reject(err))
    })
}


module.exports.odds = odds;

