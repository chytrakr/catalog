const collection = require('./model.js');

//get products count based on category
function getProductsCount(catId){
  return new Promise(function(resolve, reject) {
    collection.aggregate([
     {
       $match: {
          "catId": catId
        }
     },
     {"$group" : { _id: "$catId", count: {$sum:1}}}
   ],
   function(err, resp) {
    if (err) return reject("Products not found");
    return resolve(resp[0]? resp[0].count : 0);
   });
  })
}

module.exports = {
	getProductsCount
}