const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
  async index(req, res) {
    const products = await Product.find();
    return res.status(200).json(products);
  },
  async store(req, res) {
    const product = await Product.create(req.body);

    return res.status(201).json(product);
  },
  async show(req, res) {
    const product = await Product.find(req.params.id);

    return res.status(200).json(product);
  },
  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.status(200).json(product);
  },

  async delete(req,res) {
    await Product.findByIdAndRemove(req.params.id, { new: true });

    return res.status(200).send();
  }
}