const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function productValidator(data) {

  let errors = {};

  data.productName = !isEmpty(data.productName) ? data.productName : '';
  data.category = !isEmpty(data.category) ? data.category : '';
  data.catId = !isEmpty(data.catId) ? data.catId : '';
  data.mrp = !isEmpty(data.mrp) ? data.mrp : '';
  data.sellingPrice = !isEmpty(data.sellingPrice) ? data.sellingPrice : '';
  data.quantity = !isEmpty(data.quantity) ? data.quantity : '';

  if(Validator.isEmpty(data.productName)) {
    errors.productName = "Product name is required";
  }

  if(Validator.isEmpty(data.category)) {
    errors.category = "Category is required";
  }

  if(Validator.isEmpty(data.catId)) {
    errors.catId = "Category ID is required";
  }

  if(Validator.isEmpty(data.mrp)) {
    errors.mrp = "MRP is required";
  }

  if(Validator.isEmpty(data.sellingPrice)) {
    errors.sellingPrice = "Selling price is required";
  }

  if(Validator.isEmpty(data.quantity)) {
    errors.quantity = "Quantity is required"
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}