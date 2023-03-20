const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character/";


function filterData(data) {
    return {
        id: data.id,
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species
    };
}


const getCharById = (req, res) => {
    const { id } = req.params;
    console.log(id);
    axios.get(`${URL}${id}`)
        .then(({ data }) => {
            const char = filterData(data);
            console.log(char);
            res.status(200).json(char);
        })
        .catch((error) => {
            res.status(500).json({ message: error });
        })
}

module.exports = { getCharById, filterData };