var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
    // GET route to get products
    app.get("/api/products", function (req, res) {
        db.Product.findAll({}).then(function (dbProduct) {
            res.json(dbProduct);
        });
    });

    // POST route to save new products
    app.post("/api/products", function (req, res) {
        db.Product.create({
            name: req.body.name,
            username: req.body.username,
            description: req.body.description,
        }).then(function (dbProduct) {
            res.json(dbProduct);
        });
    });

    // DELETE route for deleting products
    app.delete("/api/products/:id", function (req, res) {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbProduct) {
            res.json(dbProduct);
        });

    });

    // PUT route for updating products
    app.put("/api/products", function (req, res) {
        db.Product.update({
            name: req.body.name,
            username: req.body.username,
            description: req.body.description,
            likes: req.body.likes,
            dislikes: req.body.dislikes
        }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbProduct) {
            res.json(dbProduct);
        });
    });

};
