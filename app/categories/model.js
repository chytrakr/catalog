const config = require('../config/models.js');
config.increment.initialize(config.db);

const schema = new config.mongoose.Schema({
  category: { 
    type: String, 
    required: true 
  },
  catId: { 
    type: String, 
    required: true,
    unique: true
  },
  image: { 
    type: String, 
    required: false 
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
  strict: false
});

schema.plugin(config.paginate);
module.exports = config.mongoose.model('categories', schema);