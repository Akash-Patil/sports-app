// This folder is for the APIs, Business logic for the project
// Right now, contains APIS from the odds API (Rapid API)

const conf = require('../config/config.js')
const axios = require('axios').default;
require('dotenv').config();

const odds = {};

odds.getSports = async () => {
    return new Promise((resolve, reject) => {
        return axios
            .get(
                conf.oddsConf.baseUrl + `/v4/sports/?apiKey=${process.env.ODDS_API_TOKEN}`
                //`https://api.the-odds-api.com/v4/sports/?apiKey=595035ac2a5b826fc3881212c7e5b3fd`
            )
            .then(resp => {
                //console.log(process.env.ODDS_API_TOKEN)
                resolve(resp.data)
            })
            .catch(err => reject(err))
    })
}

odds.getOdds = async (sport, regions, markets, oddsFormat) => {
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

odds.getScores = async (sport, daysFrom) => {
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


module.exports = odds; // be careful with the module.exports

// Here we are exporting the odds{} object without binding it to a .odds that
//would have to be called during importing

// module.exports always exports as an object

