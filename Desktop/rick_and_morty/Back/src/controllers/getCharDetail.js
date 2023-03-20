const axios = require("axios");
const { filterData } = require('./getCharById.js')
const URL = "https://rickandmortyapi.com/api/character/";

const getCharDetail = (req, res) => {

    const params = req.params;

    axios.get(`${URL}${params.id}`)
        .then(({ data }) => {
            const char = filterData(data);
            res.status(200).json({ ...char, satus: data.status, origin: data.origin.name })
        })
        .catch((error) => {
            res.status(500).json({ message: error })
        });
}



module.exports = { getCharDetail };