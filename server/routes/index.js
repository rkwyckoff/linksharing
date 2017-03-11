const middleware = require("../middleware");

const UserController = require("../controllers/user");


module.exports = (app) => {
  app.post('/users', UserController.register);
  app.post('/login', UserController.login);

  //app.post('/shelters', middleware.authenticate, ShelterController.create);
 app.get('/users/:id', UserController.findUser);
 app.get('/users', UserController.listUsers);


//  app.post('/shelters/:shelterId/animals', AnimalController.create);
//  app.put('/shelters/:shelterId/animals/:id', AnimalController.update);
};
