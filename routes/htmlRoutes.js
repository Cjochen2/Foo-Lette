var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
      res.render("index", {
        title: "Login Form"
      })
  });

  app.get("/registration", function(req, res) {
    res.render("registration", {
      title: "Registration Form"
    })
});


app.get("/home", function(req, res) {
  res.render("home", {
  })
});

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
