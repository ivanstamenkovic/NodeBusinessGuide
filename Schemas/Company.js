const mongoose = require('mongoose');

let CompanySchema = mongoose.Schema({
    name: String,
    email: String,
    _companyCategory: {type:mongoose.Schema.Types.ObjectId, ref: 'CompanyCategory'},
    //_headquarters:{type: mongoose.Schema.Types.ObjectId, ref: 'Department'},
    headquarters: [{
        name: String,
        address: String,
        phone_number: String
    }],
    //_departments:[{type: mongoose.Schema.Types.ObjectId, ref: 'Department'}],
    departments: [{
        name: String,
        address: String,
        phone_number: String
    }],
    _productCategories:[{type: mongoose.Schema.Types.ObjectId, ref:'ProductCategory'}],
    _products: [{type:mongoose.Schema.Types.ObjectId, ref: 'Product'}]

});
Company = mongoose.model('Company',CompanySchema);

module.exports=Company;