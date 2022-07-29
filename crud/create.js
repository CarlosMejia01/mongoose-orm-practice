require('../connection');

const Product = require("../models/Product");


const createProducts = async () => {
    const laptop = new Product({
      name: "laptop hp",
      description: "hp pavilion 15",
    });
    await laptop.save();
  
    const laptopTwo = new Product({
      name: "laptop lenovo",
      description: "lenovo x1",
    });
    await laptopTwo.save();
  };
  
  createProducts();
  