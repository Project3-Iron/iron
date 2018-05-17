const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Product = require("../models/Product");
const Device = require("../models/Device");

router.get("/:id", (req, res) => {
  Product.find({ device: req.params.id, status: true })
    .sort({ dueDate: 1 })
    .then(products => {
      if (products) {
        console.log(products);
        return res.status(200).json(products);
      } else {
        return res.status(500).json({ message: "Not products for that user" });
      }
    });
});

module.exports = router;

// router.get("/", (req, res) => {
//   let response = [];

//   console.log("llego");

//   Device.find({ user: res.locals.user._id }).then(device => {
//     start(device);
//     // device.forEach((e, i) => {
//     //
//     // });
//   });

//   //get todos los devices del usuario logeado
// });

// module.exports = router;

// async function asyncForEach(array, callback) {
//   for (let index = 0; index < array.length; index++) {
//     await callback(array[index], index, array);
//   }
// }

// const start = async array => {
//   let response = [];
//   let array2 = [];
//   await asyncForEach(array, async e => {
//     array2.push(
//       new Promise(resolve => {
//         Product.find({ device: e._id }).then(e => {
//           response.push(e);
//           console.log(e);
//         });
//       })
//     );
//   });

//   Promise.all(array2).then(() => {
//     console.log("???");
//   });
//   console.log("Done");
// };
