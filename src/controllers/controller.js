import { pool } from '../db.js'

export const toIndex = (req, res) => res.render('index')

export const toRegistro = (req, res) =>   res.render('registro')

export const toHomeAgencia = (req, res) => res.render('homeAgencia')

export const toHomeDesempleado = (req, res) => res.render('homeDesempleado')

export const toHomeEmpresa = (req, res) => res.render('homeEmpresa')

export const toEmpresa = (req, res) => res.render('empresa')

export const toProcesos = (req, res) => res.render('procesos')


export const registrarDB = (req, res) => { 
    const formData = req.body
    req.session.user = formData.nombre

    console.log(formData, 'from req.body')
    console.log(req.session.user, 'from req.session.user')
    console.log(formData.nombre)
    res.redirect('/')
}
