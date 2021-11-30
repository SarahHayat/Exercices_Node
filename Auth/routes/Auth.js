module.exports = (app) => {
  app.post("/api/signin");
  app.get("/api/signout");
  app.get("/api/me");
};
