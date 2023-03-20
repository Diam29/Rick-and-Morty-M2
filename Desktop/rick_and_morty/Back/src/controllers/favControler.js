let favs = require('../utils/favs.js');

const addFav = (req, res) => {
    let char = req.body;
    if (char && favs.push(char)) res.status(200).json(char)
    else res.status(500).json({ error: 'Error de addFav' })
}


const getFav = (req, res) => {
    if (favs) res.status(200).json(favs)
    else res.status(500).json({ error: 'Error getFav' })
}
const deleteFav = (req, res) => {
    let { id } = req.params
    if (id > 0) {
        favs = favs.filter((element) => element.id !== id)
        res.status(200).json({ success: true })
    } else {
        res.status(500).json({ error: 'Error deleteFav' })
    }
}




module.exports = { addFav, getFav, deleteFav };