const express = require('express');
const path = require('path');
const app = express();
const { products } = require('./data.js');

app.use(express.static("./public"));

// app.get('/', (req, res) => {
//    res.status(200).sendFile(__dirname, "./public/index.html");
// })

app.get('/api/v1/test', (req, res) => {
    res.status(200).json({ message: "It worked!" });
})

app.get('/api/v1/products', (req, res) => {
    res.status(200).json(products);
    // const newProducts = products.map((product) => {
    //     const {id, name, image} = product;
    //     return {id, name, image};
    // })
    // console.log(newProducts);
})

app.get('/api/v1/products/:productID', (req, res) => {
    // console.log(req.params);
    const idToFind = parseInt(req.params.productID); 
    const product = products.find((p) => p.id === idToFind);
    // res.json(req.params);
    //    console.log(product);
//    console.log(typeof(product));
//task #1
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ message: "That product was not found."});
    }
})

//task #2
app.get('/api/v1/query', (req, res) => {
    // res.send(req.query);
    //{"search":"al","limit":"5."}
    const {search, limit, cost} = req.query;
    let sortedProducts = [...products];
    //res.send(`${search} ksdhflsdhflkasdjhf ${limit}`);

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name.startsWith(search);
        })
    }

    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit));
    }
//task #3
    if (cost) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.price > cost;
        })
    }

    res.json(sortedProducts);
})




app.all('*', (req, res) => {
    res.status(404).send('<h2> Resource not found...Sorry cehck the URL');
})

app.listen(3000, () => {
    console.log('listening on port 3000...');
})

// console.log('Express Tutorial')
// const http = require('http');
// const {readFileSync} = require('fs');

// const homePage = readFileSync('./public/index.html');

// const server = http.createServer((req, res) => {
//     const url = req.url;

//     if (url === '/') {
//         res.writeHead(200, {'content-type' : 'text/html'});
//         res.write(homePage);
//         res.end();
//     } else if (url === '/about') {
//         res.writeHead(200, {'content-type' : 'text/html'});
//         res.write('<h3>About page</h3>');
//         res.end();
//     } else {
//         res.writeHead(404, {'content-type' : 'text/html'});
//         res.write('<h1>Page not found</h1>');
//         res.end();
//     }
//     //console.log(`wtf is ${req.pipe}`);
// })

// server.listen(3000);