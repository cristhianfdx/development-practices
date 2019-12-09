'use strict'

const { products } = require('../db.json');

module.exports={
    getProducts: (req, res)=>{
        res.json({products});
    },
    addProduct: (req, res)=>{
        const {name} = req.body;

        products.push({
            id : products.length,
            name        
        });

        res.json({
            success: true,
            msg: "succesfully added"
        });
    },
    updateProduct:(req, res)=>{
        const { id } = req.params;
        const { name } = req.body;

        products.forEach(function(product, i){
            if(product.id === Number(id)){
                product.name = name;
            }
        });

        res.json({
            success : true,
            msg: "successfully updated"
        });
    },
    deleteProduct: (req, res)=>{
        const { id } = req.params;

        products.forEach((product, i)=>{
            products.splice(i, 1);
        });

        res.json({
            success : true,
            msg: "successfully deleted"
        });
    }
};