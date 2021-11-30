import { create } from "../controlllers/user.controller"

module.exports = (app) => {
    app.post("/api/create", create)
  };
  