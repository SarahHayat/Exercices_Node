module.exports = (app) => {
  require("./Auth")(app);
  require("./user.route")(app);
};
