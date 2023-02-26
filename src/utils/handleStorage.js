const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        const pathStorage = `${__dirname}/../storage`;
        callBack(null, pathStorage);
    },
    filename: (req, file, callBack) => {
        const ext = file.originalname.split(".").pop();
        const fileName = `file-${Date.now()}.${ext}`;
        callBack(null, fileName)
    }
});

const uploadMiddleware = multer({storage});

module.exports = uploadMiddleware;