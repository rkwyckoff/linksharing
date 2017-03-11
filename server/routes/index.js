const middleware = require("../middleware");

const UserController = require("../controllers/user");


module.exports = (app) => {
  app.post('/users', UserController.register);
  app.post('/login', UserController.login);

  //app.post('/shelters', middleware.authenticate, ShelterController.create);
//  app.get('/shelters/:id', ShelterController.listAnimals);

//  app.post('/shelters/:shelterId/animals', AnimalController.create);
//  app.put('/shelters/:shelterId/animals/:id', AnimalController.update);
};
