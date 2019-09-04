"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const bodyParser = require("body-parser");
admin.initializeApp(functions.config().firebase);
const db = admin.firestore(); // Add this
const app = express();
const main = express();
main.use('/api/v1', app);
main.use(bodyParser.json());
exports.webApi = functions.https.onRequest(main);
// Post product
app.post('/products', async (request, response) => {
    try {
        const { name, price, link, rating, category } = request.body;
        if (!name)
            throw new Error('Product name is required');
        if (!price)
            throw new Error('Product price is required');
        if (!link)
            throw new Error('Product link is required');
        if (!rating)
            throw new Error('Product rating is required');
        if (!category)
            throw new Error('Product category is required');
        const data = {
            name,
            price,
            link,
            rating,
            category
        };
        const productRef = await db.collection('products').add(data);
        const product = await productRef.get();
        response.json({
            id: productRef.id,
            data: product.data()
        });
    }
    catch (error) {
        response.status(500).send(error);
    }
});
// Get product by ID
app.get('/products/:id', async (request, response) => {
    try {
        const productId = request.params.id;
        if (!productId)
            throw new Error('Product ID is required');
        const product = await db.collection('products').doc(productId).get();
        if (!product.exists) {
            throw new Error('Product not found.');
        }
        response.json({
            id: product.id,
            data: product.data()
        });
    }
    catch (error) {
        response.status(500).send(error);
    }
});
// Get product by Rating
app.get('/products/rating/:rating', async (request, response) => {
    try {
        const value = request.params.rating;
        const productQuerySnapshot = await db.collection('products').where("rating", "==", value).get();
        const productsByRating = [];
        if (!productQuerySnapshot) {
            throw new Error(`There are no products with a ${value} rating`);
        }
        productQuerySnapshot.forEach((doc) => {
            productsByRating.push({
                id: doc.id,
                data: doc.data()
            });
        });
        response.json(productsByRating);
    }
    catch (error) {
        response.status(500).send(error);
    }
});
// Get product by Category
app.get('/products/category/:category', async (request, response) => {
    try {
        const title = request.params.category;
        const productQuerySnapshot = await db.collection('products').where("category", "==", title).get();
        const productsByCategory = [];
        if (!productQuerySnapshot) {
            throw new Error(`There are no products in ${title} `);
        }
        productQuerySnapshot.forEach((doc) => {
            productsByCategory.push({
                id: doc.id,
                data: doc.data()
            });
        });
        const sortedByRating = productsByCategory.sort((a, b) => b.data.rating - a.data.rating);
        response.json(sortedByRating);
    }
    catch (error) {
        response.status(500).send(error);
    }
});
// Get products
app.get('/products', async (request, response) => {
    try {
        const productQuerySnapshot = await db.collection('products').get();
        const products = [];
        productQuerySnapshot.forEach((doc) => {
            products.push({
                id: doc.id,
                data: doc.data()
            });
        });
        response.json(products);
    }
    catch (error) {
        response.status(500).send(error);
    }
});
// Update product
app.put('/products/:id', async (request, response) => {
    try {
        const productId = request.params.id;
        const name = request.body.name;
        const price = request.body.price;
        const link = request.body.link;
        const rating = request.body.rating;
        const category = request.body.category;
        if (!productId)
            throw new Error('id is blank');
        if (!name)
            throw new Error('Product name is required');
        if (!price)
            throw new Error('Product price is required');
        if (!link)
            throw new Error('Product link is required');
        if (!rating)
            throw new Error('Product rating is required');
        if (!category)
            throw new Error('Product category is required');
        const data = {
            name, price, link, rating, category
        };
        await db.collection('products')
            .doc(productId)
            .set(data, { merge: true });
        response.json({
            id: productId,
            data
        });
    }
    catch (error) {
        response.status(500).send(error);
    }
});
// Delete product
app.delete('/products/:id', async (request, response) => {
    try {
        const productId = request.params.id;
        if (!productId)
            throw new Error('id is blank');
        await db.collection('products')
            .doc(productId)
            .delete();
        response.json({
            id: productId,
        });
    }
    catch (error) {
        response.status(500).send(error);
    }
});
//# sourceMappingURL=index.js.map