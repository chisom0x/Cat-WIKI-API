const Cat = require('./catmodel')


exports.getAllCats = async (req, res) => {
    const cats = await Cat.find();
    res.status(200).json({
        message: 'successful',
        data: cats
    })
}

exports.createCat = async(req, res) => {
    const newCat = await Cat.create(req.body)
    res.status(200).json({
        message: 'The intelligence and friendliness is measured on a scale of 1 to 5',
        data: {
            newCat
        }
    })
}



exports.searchCat = async (req, res) => {
    try {
        const breed = req.params.breed;
        const cat = await Cat.findOne({ breed });
    
        if (!cat) {
          return res.status(404).json({ message: 'Cat not found' });
        }
    
        res.json(cat);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
      }
}

exports.topFriendly = async (req, res) => {
    const limit = req.query.limit || 10
    const cats = await Cat.find().sort({friendliness: -1}).limit(parseInt(limit))
    res.json(cats)
}

exports.mostIntelligent = async (req, res) => {
    const limit = req.query.limit || 10
    const cats = await Cat.find().sort({intelligence: -1}).limit(parseInt(limit))
    res.json(cats)
}