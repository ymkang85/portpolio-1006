const multer = require('multer');

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, done) =>{
            done(null, 'img/');
        },
        filename: (req, file, done) =>{
            done(null, file.fieldname + '-' + Date.now())
        }
    })
});

module.exports = upload;