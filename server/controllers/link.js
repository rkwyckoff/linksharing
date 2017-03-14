const Link = require("../models").Link;
const User = require("../models").User;

module.exports = {
  create (req, res) {
    console.log(req.user.id)
    Link.create({
      title: req.body.title,
      body: req.body.contents,
      user_id: req.user.id
    })
      .then(link => res.status(201).send(link))
      .catch(error => res.status(400).send(error));
  },
    listLinks (req, res) {
      console.log("inside listlinks")
      Link.findAll({
        order: [ ['createdAt', 'DESC'] ]
      })
      .then(link => res.status(200).send(link))
      .catch(error => res.status(400).send(error));
  }


};
