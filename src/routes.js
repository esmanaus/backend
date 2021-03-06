const express = require('express');
const multer = require('multer');
const multerConfig = require('../config/multer');

const routes = express.Router();

const BoxController = require('../controllers/BoxController');
const FileController = require('../controllers/FileController');

routes.get('/', (req, res) => {
    return res.send('Hello Duds');
});

routes.post("/boxes", BoxController.store);
//routes.post("/files", multer(multerConfig).single('file'), FileController.store );
routes.post("/boxes/:id/files", multer(multerConfig).single('file'), FileController.store );

routes.get("/boxes/:id", BoxController.show);

/*
routes.get('/teste', (req, res) => {
    return res.send('Hello Duds');
});
*/

module.exports = routes;