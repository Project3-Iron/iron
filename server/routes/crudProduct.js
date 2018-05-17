const express = require("express");
const _ = require("lodash");
const router = express.Router();

const simpleCrud = Model => {
  const fields = Object.keys(_.omit(Model.schema.paths, ["__v", "_id"]));

  // Retrive ALL
  router.get("/", (req, res, next) => {
    //console.log(res.locals.user._id)
    Model.find()
      .then(objects => res.json(objects))
      .catch(e => next(e));
  });

  // Create
  router.post("/", (req, res, next) => {
    const obj = _.pick(req.body, fields);
   // console.log(obj);
    Model.create(obj)
      .then(object => res.json(object))
      .catch(e => next(e));
  });

  // Retrive DETAIL
  router.get("/:id", (req, res, next) => {
    Model.findById(req.params.id)
      .then(object => res.json(object))
      .catch(e => next(e));
  });

  // Retrive DETAIL
  router.put("/:id", (req, res, next) => {
    const updates = _.pick(req.body, fields);
    Model.findByIdAndUpdate(req.params.id, updates, { new: true })
      .then(object => res.json(object))
      .catch(e => next(e));
  });

  // Delete
  router.delete("/:id", (req, res, next) => {
    Model.findByIdAndRemove(req.params.id)
      .then((err, a) => {
        console.log(err, a);
        return res.json({ message: `SUCESSFUL DELETE ${req.params.id}` });
      })

      .catch(e => next(e));
  });
  return router;
};
module.exports = simpleCrud;
