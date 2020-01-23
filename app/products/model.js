const config = require('../config/models.js');
config.increment.initialize(config.db);

const schema = new config.mongoose.Schema({
  productName: { 
    type: String, 
    required: true 
  },
  image: { 
    type: String, 
    required: false 
  },
  category: { 
    type: String, 
    required: true 
  },
  catId: { 
    type: String, 
    required: true 
  },
  mrp: { 
    type: Number,
     required: true,
  },
  sellingPrice: { 
    type: Number,
    required: true,
  },
  quantity: {         // available quantity
    type: Number, 
    required: true 
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: Boolean,
    default: true
  }
}, {
  strict: true
});

schema.plugin(config.paginate);
module.exports = config.mongoose.model('products', schema);