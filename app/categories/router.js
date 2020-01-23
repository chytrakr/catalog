const config = require('../config/routes.js');
const router = config.express.Router();
const collection = require('./model.js');
const productsFunction = require('../products/functions.js')

// @route GET api/v1/categories
// @desc get categories list with pagination
// @access Public
router.get('/', function (req, res) {

  // Create Options
  let options = { sort: '-createdAt' };
  options.page = (req.query.page)? Number(req.query.page): 1;
  options.limit = (req.query.limit)? Number(req.query.limit): 20;
  options.lean = true;

  // Create query params
  let query = {};
  if(req.query.search) {
    query.category = { $regex: `${req.query.search}.*`, $options: "i" };
  }
  collection.paginate(query, options, function(err, results) {
    // results.docs.forEach(async (result) => {
    //   result.productsCount = await productsFunction.getProductsCount(result.catId);
    // })
    async function loop() {
      for(let i=0; i<results.docs.length; i++) {
        results.docs[i].productsCount = await productsFunction.getProductsCount(results.docs[i].catId);
      }
    }
    loop();
    res.status(200).send(results);
  }, fail => {
    res.status(500).send("Something went wrong, please try after sometime");
  });
});

// @route CREATE api/v1/categories
// @desc create categories
// @access Public
router.post('/', function(req, res) {
  
  const { errors, isValid } = config.validators.categoryValidator(req.body);

  // Checking Validation
  if (!isValid) {
      return res.status(400).json(errors);
  }
  let formData = req.body;

  collection.create(formData, 
  function (err, categories) {
    if (err) return res.status(500).send(err);
    return res.status(200).send(categories);
  });
});

module.exports = router