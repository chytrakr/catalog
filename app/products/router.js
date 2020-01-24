const config = require('../config/routes.js');
const router = config.express.Router();
const collection = require('./model.js');

// @route GET api/v1/products
// @desc get products list with pagination
// @access Public
router.get('/', function (req, res) {

  // Create Options
  let options = { sort: '-createdAt' };
  options.page = (req.query.page)? Number(req.query.page): 1;
  options.limit = (req.query.limit)? Number(req.query.limit): 20;

  // Create query params
  let query = {};
  if(req.query.search) {
    query["$or"] = [
      {"productName": { $regex: `${req.query.search}.*`, $options: "i" }},
      {"category": { $regex: `${req.query.search}.*`, $options: "i" }}
    ]
  }
  collection.paginate(query, options, function(err, result) {
    if (err) return res.status(500).send("Something went wrong, please try after sometime");
    res.status(200).send(result);
  });
});

// @route CREATE api/v1/products
// @desc create products
// @access Public
router.post('/', function(req, res) {

  const { errors, isValid } = config.validators.productValidator(req.body);

  // Checking Validation
  if (!isValid) {
      return res.status(400).json(errors);
  }

  let formData = req.body;

  collection.create(formData, function (err, products) {
    if (err) return res.status(500).send(err);
    return res.status(200).send(products);
  });
});

module.exports = router