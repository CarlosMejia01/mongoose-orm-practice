require("./connection");

const Product = require("./models/Product");

const product = new Product({
  name: "Laptop",
  description: "lenovo thinpak x1 carbon 6th generation",
  price: 1300.99,
});

product.save((err, document) => {
  if (err) console.log(err);
  console.log(document);
});

console.log(product);
