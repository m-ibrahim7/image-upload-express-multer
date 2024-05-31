const express = require('express');
const multer = require('multer');
const path = require('path');

module.exports = {
    uploadImage: (req, res) => {
        const imageUrl = req.protocol + '://' + req.get('host') + '/images/' + req.files[0].filename;
        res.send(imageUrl);
    },
    getimage: express.static(path.join(__dirname, '../images')),
    goToHtmlPage: (req, res) => { return res.redirect('index.html') }
};

