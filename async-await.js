require("./connection");

const Product = require("./models/Product");

const main = async () => {
  const product = new Product({
    name: "Keyword",
    description: "Corsair k68 RGB Gaming Keyboard",
    price: 150,
  });

  const productSaved = await product.save();
  return productSaved;
};

main()
  .then((productSaved) => console.log(productSaved))
  .catch((err) => console.log(err));
