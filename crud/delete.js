require("../connection");

const Product = require("../models/Product");

const deleteProduct = async () => {
    //delete all matches
    //const result = await Product.deleteMany({name: 'keyboard});

    //find all and delete one 
    //const result = await Product.findOneAndDelete({name: 'keyboard});

    //find one and delete one
    //const result = await Product.findOneAndDelete({name: 'laptop'});

    //find by id and delete
    // const result = await Product.findByIdAndDelete('');
    console.log(result);
};

deleteProduct();
