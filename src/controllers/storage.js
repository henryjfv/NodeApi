const PUBLIC_URL = process.env.PUBLIC_URL;

const { storageModel } = require('../models')
/**
 * Obtiene una lista de los items
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    try {
        const data = await storageModel.find({});
        res.send({ data });
    } catch (error) {
        res.status(400)
        res.send({ message: 'Lo sentimos, no encontramos la informacion solicitada' });
        console.log(error);
    }
}
/**
 *  Obtiene un detalle del item
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) => {

}
/**
 * Crea un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    const { body, file } = req;
    const filename = file.filename;
    const fileData = {
        filename,
        url: `${PUBLIC_URL}/${filename}`
    }
    const data = await storageModel.create(fileData);
    res.send({ data })
}
/**
 * Actualiza un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) => {

}
/**
 * Elimina un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res) => {

}

module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}