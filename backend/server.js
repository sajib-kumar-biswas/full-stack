import express from "express";
import data from './data.js';

const port = process.env.port || 3000;
const server = express();

server.get('/api/products', (req, res) => {
    res.send(data.products);
})

server.listen(port, (error) => {
    if (error) {
        console.log(`something went wrong.`);
    } else {
        console.log(`express server listening to the port ${port}`);
    }
})