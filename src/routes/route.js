import { Router } from "express";
import { pool } from '../db.js'

const router = Router();


router.get('/', (req, res) =>  res.render('index') )

router.get('/registro', (req, res) =>  res.render('registro') )

router.get('/index', (req, res) =>  res.render('index') )

export default router
















// try {
//     const query = await pool.query("select * from employee where midinit='I'")
//     console.log(query.rows)
//     const data = JSON.stringify(query.rows)
//     res.render('index', { title: 'Yo y los homies', data: data })
// } catch (e) {
//     console.log(e)
// }

// --------------------------------------------------

// const express = require('express')
// const pool = require('../db')

// const app = express()

// app.get('/aver', (req, res) => {
//     res.send('<h1>Hello World aver</h1>')
// })

// app.get('/aaaa', async (req, res) => {
//     try {
//         const query = await pool.query("select * from employee where midinit='I'")
//         res.json(query.rows) // muestra los datos en formato json
//     } catch (e) {
//         console.log(e)
//     }
// })

// app.get('/', (req, res) => {
//     res.send('<h1>Hello World</h1>')
// })
// module.exports = app