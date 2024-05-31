const express = require('express');
const multer = require('multer');
const path = require('path');
const controller = require('../controller/image.controller');

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

const imageFolder = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "../images"),
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Math.floor(Math.random() * 1001) + path.extname(file.originalname));
  }
});

const upload = multer({ storage: imageFolder });

app.get("/", controller.goToHtmlPage);
app.post('/upload', upload.array('image', 2), controller.uploadImage);
app.use('/images', controller.getimage);

const port = 3010;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});