import e from 'connect-flash'
import { pool } from '../db.js'


export const toIndex = (req, res) => {
    // const aux = req.flash('user')[0]
    // console.log(aux)
    res.render('index')
}
export const toRegistro = (req, res) => res.render('registro')

export const toHomeAgencia = (req, res) => res.render('homeAgencia')

export const toHomeDesempleado = (req, res) => res.render('homeDesempleado')

export const toHomeEmpresa = (req, res) => res.render('homeEmpresa')

export const toEmpresa = (req, res) => res.render('empresa')

export const toProcesos = (req, res) => res.render('procesos')


export const registrarDB = async (req, res) => {

    const {
        tipo,
        nombre,
        profesion,
        telefono,
        direccion,
        salario,
        pais,
        cv,
        video,
        usuarioCorreo,
        contrasena,
        nombreE,
        nitE,
        razonSocialE,
        representanteE,
        telefonoE,
        direccionE,
        sedeE,
        paisE,
        empresaCorreo,
        contrasenaE
    } = req.body

    if (tipo === 'desempleado') {
        // console.log(req.body.nombre, ', desempleado')
        // req.flash('user', req.body.nombre)

        const insercion1 = await pool.query('INSERT INTO Desempleado (usuariodesempleado ,contrasenadesempleado , nombredesempleado , profesion , telefonodesempleado, salario, puntuacionDesempleado, idUbicacion, idHojaVida, idVideo) VALUES  ($1 , $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *', [usuarioCorreo, contrasena, nombre, profesion, telefono, salario, Math.ceil(Math.random() * 5), null, null, null])

        const insercion2 = await pool.query('INSERT INTO Ubicacion (direccion, pais) VALUES  ($1 , $2) RETURNING *', [direccion, pais])

        const actualizacion1 = await pool.query('UPDATE Desempleado SET idUbicacion = $1 WHERE iddesempleado = $2 RETURNING *', [insercion2.rows[0].idubicacion, insercion1.rows[0].iddesempleado])

        const insercion3 = await pool.query('INSERT INTO HojaVida (link) VALUES ($1) RETURNING *', [cv])

        const actualizacion2 = await pool.query('UPDATE Desempleado SET idHojaVida = $1 WHERE iddesempleado = $2 RETURNING *', [insercion3.rows[0].idhojavida, insercion1.rows[0].iddesempleado])

        const insercion4 = await pool.query('INSERT INTO Video (link) VALUES ($1) RETURNING *', [video])

        const actualizacion3 = await pool.query('UPDATE Desempleado SET idVideo = $1 WHERE iddesempleado = $2 RETURNING *', [insercion4.rows[0].idvideo, insercion1.rows[0].iddesempleado])

    }

    if (tipo === 'empresa') {
        // console.log(req.body.nombreE, ', empresa')
        // req.flash('user', req.body.nombreE)

        const insercion1 = await pool.query('INSERT INTO Empresa (nit ,usuarioEmpresa , contrasenaEmpresa , nombreEmpresa , razonSocial, representanteLegal, telefonoEmpresa, puntuacionEmpresa, idUbicacion, idSede) VALUES  ($1 , $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *', [nitE, empresaCorreo, contrasenaE, nombreE, razonSocialE, representanteE, telefonoE, Math.ceil(Math.random() * 5), null, null])

        const insercion2 = await pool.query('INSERT INTO Ubicacion (direccion, pais) VALUES  ($1 , $2) RETURNING *', [direccionE, paisE])

        const actualizacion1 = await pool.query('UPDATE Empresa SET idUbicacion = $1 WHERE nit = $2 RETURNING *', [insercion2.rows[0].idubicacion, insercion1.rows[0].nit])

        const insercion3 = await pool.query('INSERT INTO Sede (nombreSede, idUbicacion) VALUES ($1, $2) RETURNING *', [sedeE, insercion2.rows[0].idubicacion])

        const actualizacion2 = await pool.query('UPDATE Empresa SET idSede = $1 WHERE nit = $2 RETURNING *', [insercion3.rows[0].idsede, insercion1.rows[0].nit])
    }

    res.redirect('/') //! temporal, no olvidar quitarlo
    // res.send('ok')
}


export const iniciarSesion = async (req, res) => {
    const { correo, contrasena } = req.body

    const peticionDesempleado = await pool.query('SELECT * FROM Desempleado WHERE usuariodesempleado = $1 AND contrasenadesempleado = $2', [correo, contrasena])

    const peticionEmpresa = await pool.query('SELECT * FROM Empresa WHERE usuarioEmpresa = $1 AND contrasenaEmpresa = $2', [correo, contrasena])

    const peticionAgencia = await pool.query('SELECT * FROM Agencia WHERE usuarioAdmin = $1 AND contrasenaAdmin = $2', [correo, contrasena])

    if (peticionDesempleado.rows[0]) {
        req.flash('user', req.body)
        res.redirect('/homeDesempleado')
    } else if (peticionEmpresa.rows[0]) {
        req.flash('user', req.body)
        res.redirect('/homeEmpresa')
    } else if (peticionAgencia.rows[0]) {
        req.flash('user', req.body)
        res.redirect('/homeAgencia')
    } else {
        res.redirect('/')
    }

    // no dejar esto activo, ya que no se puede redireccionar y enviar una respuesta al mismo tiempo
    // res.send('ok')  // solo testeo de la api
}


export const cerrarSesion = (req, res) => {
    req.flash('user', '')
    res.redirect('/')
}
