import { pool } from '../db.js'

export const toIndex = (req, res) => res.render('index')

export const toRegistro = (req, res) => {
    res.render('registro')
}

export const registrarDB = async (req, res) => { 
    console.log(req.body)
}
