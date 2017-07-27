var db = require('../../models');

module.exports = function(app, passport) {
  app.get("/api/products", function(req, res) {
    db.Product.findAll({})
    .then(function(dbProduct) {
      res.json(dbProduct);
    });
  });

  app.get("/api/products/:id", function(req, res) {
    db.Product.findOne({
      where: {
      id: req.params.id
      }
    })
    .then(function(dbProduct) {
      res.json(dbProduct);
    });
  });

  app.post('/api/new_products', function(req, res) {
    db.Product.create(req.body).then(function(newProduct) {
      res.json(newProduct);
    });
  });

  app.get('/api/new_orders', function(req, res) {
    db.Order.findAll({
      where: {
        finished: false
      }
    }).then(function(orders) {
      res.json(orders);
    });
  });

  app.put("/api/order/product/", function(req, res) {
    request(req.protocol + "://" + req.get('host') + "/api/products/" + req.body.productid, function(error, response, data){
      if(error) throw(error);
      db.Order.findOrCreate({
        where: {
          UserId: req.user.id,
          sent: false
        }
      }).then(function(dbOrder){
        dbOrder.addProduct(data);
        dbOrder.save();
      });
    });
  });

  app.put("/api/order/checkout", function(req, res) {
    db.Order.update({
      where: {
        UserId: req.user.id
      }
    }, {
      sent: true
    }).then(function(dbOrder){
      //redirect to payment when implemented
      res.json(dbOrder);
    }).catch(function(err){
      console.log(err);
    });
  });

  app.get("/api/ordered-product", function(req, res) {
    db.Order.findAll({
      where: {
        UserId: req.user.id,
        sent: false
      },
      include: {
        model: [db.Product]
      }
    }).then(function(dbOrder) {
      res.json(dbOrder);
    });
  });

  app.get("/api/order-history", function(req, res) {
    db.Order.findAll({
      where: {
        UserId: req.user.id,
        sent: true
      },
      include: {
        model: [db.Product]
      }
    }).then(function(dbOrder) {
      res.json(dbOrder);
    });
  });

  app.get("/api/recommendations", function(req, res) {
    db.Recommendation.findAll({ 
      limit: 10,
      where: {
        approved: true
      } 
    }).then(function(dbRec) {
      res.json(dbRec);
    });
  });

  app.get("/api/recommendations_approval", function(req, res) {
    db.Recommendation.findAll({
      where: {
        approval: false
      }
    }).then(function(data) {
      res.json(data)
    })
  })

  app.put("/api/save-recommendation", function(req, res) {
    db.Recommendation.create({
      text: req.body.text, 
      UserId: req.user.id   
    }).then(function(hold) {
      res.json(hold);
    })
  })
}


