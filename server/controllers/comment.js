const Comment = require("../models").Comment;
const Link = require("../models").Link;

module.exports = {
  create (req, res) {
    console.log(req.user)
    Comment.create({
      comment: req.body.comment,
      user_id: req.user.id,
      link_id: req.params.id,
    })
      .then(comment => res.status(201).send(comment))
      .catch(error => res.status(400).send(error));
  },
  // findComment (req, res) {
  //     Comment.findById(req.params.id)
  //     .then(comments => res.status(201).send(comments))
  //     .catch(error => res.status(400).send(error));
  // }

  listComments (req, res) {
      Comment.findAll({
      link_id: req.params.id
      })
      .then(comment => res.status(200).send(comment))
      .catch(error => res.status(400).send(error));
  },
  listallComments (req, res) {
      Comment.findAll({

      })
      .then(comment => res.status(200).send(comment))
      .catch(error => res.status(400).send(error));
  }

};
