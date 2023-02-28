const mongoose = require('mongoose');

const { tracksModel } = require('../models')
/**
 * Obtiene una lista de los items
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    try {
        const data = await tracksModel.find({});
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
    const { body } = req;
    const data = await tracksModel.create(
        {
            ...body,
            mediaId: mongoose.Types.ObjectId(body.mediaId)
        }
    );
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