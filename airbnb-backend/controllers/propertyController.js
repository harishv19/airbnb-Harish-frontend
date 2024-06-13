const Property = require('../models/Property');

exports.createProperty = async (req, res) => {
  const { title, description, price, imageUrl, location, rating, amenities } = req.body;
  try {
    const newProperty = new Property({ title, description, price, imageUrl, location, rating, amenities });
    const property = await newProperty.save();
    res.json(property);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
