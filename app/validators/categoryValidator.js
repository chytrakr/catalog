const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function categoryValidator(data) {

  let errors = {};

  data.category = !isEmpty(data.category) ? data.category : '';
  data.catId = !isEmpty(data.catId) ? data.catId : '';

  if(Validator.isEmpty(data.category)) {
    errors.category = "Category is required";
  }

  if(Validator.isEmpty(data.catId)) {
    errors.catId = "Category ID is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}