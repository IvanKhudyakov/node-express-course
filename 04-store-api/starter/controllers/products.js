const Product = require('../models/product');

const getAllProductsStatic = async  (req,res) => {
    // throw new Error('testing async package');
    const search = 'a';
    const products = await Product.find({
        //name:'vase table',
        //name: {$regex: search, $options: 'i'},
        price : {$gt: 30}
    }).sort('price')
    .select('name price')
    // .limit(3)
    // .skip(1);
    res.status(200).json({products, nbHits: products.length});
}
const getAllProducts = async  (req,res) => {
    // console.log(req.query);
    const {featured, company, name, sort, fields, numericFilters} = req.query;

    const queryObject = {};

    if (featured) {
        queryObject.featured = featured === 'true' ? true : false;
    }
    if (company) {
        queryObject.company = company;
    }
    if (name) {
        queryObject.name = {$regex: name, $options: 'i'};
    }
    //numeric filters implementation
    if (numericFilters) {
        const operatorMap = {
            '>':'$gt',
            '>=':'$gte',
            '=':'=',
            '<':'$lt',
            '<=':'$lte'
        }
        const regEx = /\b(<|>|>=|=|<=)\b/g
        let filters = numericFilters.replace(regEx, (match) => `-${operatorMap[match]}-`);
        //console.log(filters);
        const options = ['price', 'rating'];
        filters = filters.split(',').forEach((item) => {
            const [field, operator, value] = item.split('-');
            if (options.includes(field)) {
                queryObject[field] = {[operator]:Number(value)}
            }            
        });
    }

    console.log(queryObject);
    let result = Product.find(queryObject);
    //sort
    if (sort) {
        console.log(sort);
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList);
    } else {
        result = result.sort('createdAt');
    }
    //fields
     if(fields) {
        const fieldsList = fields.split(',').join(' ');
        result = result.select(fieldsList);
    }
    //limit
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page-1) * limit;
    // console.log(page, limit, skip);
    result = result.skip(skip).limit(limit);
    
    const products = await result;
    res.status(200).json({products, nbHits: products.length});
}

module.exports = {
    getAllProducts, getAllProductsStatic
};