import { pool } from '../db.js'

// Rutas de la página

export const toIndex = (req, res) => res.render('index')

export const toRegistro = (req, res) => res.render('registro')

export const toHomeAgencia = (req, res) => res.render('homeAgencia')

export const toHomeDesempleado = (req, res) => res.render('homeDesempleado')

export const toHomeEmpresa = (req, res) => res.render('homeEmpresa')

export const toEmpresa = (req, res) => res.render('empresa')

export const toProcesos = (req, res) => res.render('procesos')

export const toAgregarVacante = (req, res) => res.render('agregarVacante')

// Rutas con logica (APIs)

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

    res.redirect('/')

    if (tipo === 'desempleado') {

        const insercion1 = await pool.query('INSERT INTO Desempleado (usuariodesempleado ,contrasenadesempleado , nombredesempleado , profesion , telefonodesempleado, salario, puntuacionDesempleado, idUbicacion, idHojaVida, idVideo, linkHojaVida, linkVideo, direccion, pais) VALUES  ($1 , $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *', [usuarioCorreo, contrasena, nombre, profesion, telefono, salario, Math.ceil(Math.random() * 5), null, null, null, cv, video, direccion, pais])

        const insercion2 = await pool.query('INSERT INTO Ubicacion (direccion, pais) VALUES  ($1 , $2) RETURNING *', [direccion, pais])

        const actualizacion1 = await pool.query('UPDATE Desempleado SET idUbicacion = $1 WHERE iddesempleado = $2 RETURNING *', [insercion2.rows[0].idubicacion, insercion1.rows[0].iddesempleado])

        const insercion3 = await pool.query('INSERT INTO HojaVida (link) VALUES ($1) RETURNING *', [cv])

        const actualizacion2 = await pool.query('UPDATE Desempleado SET idHojaVida = $1 WHERE iddesempleado = $2 RETURNING *', [insercion3.rows[0].idhojavida, insercion1.rows[0].iddesempleado])

        const insercion4 = await pool.query('INSERT INTO Video (link) VALUES ($1) RETURNING *', [video])

        const actualizacion3 = await pool.query('UPDATE Desempleado SET idVideo = $1 WHERE iddesempleado = $2 RETURNING *', [insercion4.rows[0].idvideo, insercion1.rows[0].iddesempleado])

    }

    if (tipo === 'empresa') {

        const insercion1 = await pool.query('INSERT INTO Empresa (nit, usuarioEmpresa , contrasenaEmpresa , nombreEmpresa , razonSocial, representanteLegal, telefonoEmpresa, puntuacionEmpresa, idUbicacion, idSede, direccion, pais, sede) VALUES  ($1 , $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *', [nitE, empresaCorreo, contrasenaE, nombreE, razonSocialE, representanteE, telefonoE, Math.ceil(Math.random() * 5), null, null, direccionE, paisE, sedeE])

        const insercion2 = await pool.query('INSERT INTO Ubicacion (direccion, pais) VALUES  ($1 , $2) RETURNING *', [direccionE, paisE])

        const actualizacion1 = await pool.query('UPDATE Empresa SET idUbicacion = $1 WHERE nit = $2 RETURNING *', [insercion2.rows[0].idubicacion, insercion1.rows[0].nit])

        const insercion3 = await pool.query('INSERT INTO Sede (nombreSede, idUbicacion) VALUES ($1, $2) RETURNING *', [sedeE, insercion2.rows[0].idubicacion])

        const actualizacion2 = await pool.query('UPDATE Empresa SET idSede = $1 WHERE nit = $2 RETURNING *', [insercion3.rows[0].idsede, insercion1.rows[0].nit])
    }

    //! temporal, no olvidar quitarlo
    // res.send('ok')
}


export const iniciarSesion = async (req, res) => {
    const { correo, contrasena } = req.body

    const peticionDesempleado = await pool.query('SELECT * FROM Desempleado WHERE usuariodesempleado = $1 AND contrasenadesempleado = $2', [correo, contrasena])

    const peticionEmpresa = await pool.query('SELECT * FROM Empresa WHERE usuarioEmpresa = $1 AND contrasenaEmpresa = $2', [correo, contrasena])

    const peticionAgencia = await pool.query('SELECT * FROM Agencia WHERE usuarioAdmin = $1 AND contrasenaAdmin = $2', [correo, contrasena])

    if (peticionDesempleado.rows[0]) {
        req.session.user = peticionDesempleado.rows[0].nombredesempleado
        req.session.tipo = 'desempleado'
        res.redirect('/homeDesempleado')
    } else if (peticionEmpresa.rows[0]) {
        // req.flash('user', peticionEmpresa.rows[0].nombreempresa)
        req.session.user = peticionEmpresa.rows[0].nombreempresa
        req.session.tipo = 'empresa'
        res.redirect('/homeEmpresa')
    } else if (peticionAgencia.rows[0]) {
        // req.flash('user', "ADMIN")
        req.session.user = "ADMIN"
        req.session.tipo = 'agencia'
        res.redirect('/homeAgencia')
    } else {
        res.redirect('/')
    }

    // no dejar esto activo, ya que no se puede redireccionar y enviar una respuesta al mismo tiempo
    // res.send('ok')  // solo testeo de la api
}


export const cerrarSesion = (req, res) => {
    // req.flash('user', '')
    req.session.user = ""
    const usuario = req.session.user
    console.log(usuario)
    res.redirect('/')
}


export const agregarVacante = async (req, res) => {
    const { tipo, cargo, edad, fechaInicio, fechaCierre, salario } = req.body
    const usuario = req.session.user
    console.log("usuario: " + usuario)


    res.redirect('/homeEmpresa')

    const insercionVacante = await pool.query('INSERT INTO Vacante (fechaInicio, fechaCierre, cargo, salario, pregradoRequerido, rangoEdad, puntuacionVacante, nit, idUbicacion) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', [fechaInicio, fechaCierre, cargo, salario, tipo === "Pregrado Requerido" ? true : false, edad, null, null, null])

    const peticionEmpresa = await pool.query('SELECT nit, idubicacion FROM Empresa WHERE nombreempresa = $1', [usuario])

    const peticionUbicacion = await pool.query('SELECT direccion, pais FROM Ubicacion WHERE idubicacion = $1', [peticionEmpresa.rows[0].idubicacion])

    const insercionVacante2 = await pool.query('UPDATE Vacante SET nit = $1, idUbicacion = $2, nombreempresa = $3, direccion = $4, pais = $5 WHERE idvacante = $6 RETURNING *', [peticionEmpresa.rows[0].nit, peticionEmpresa.rows[0].idubicacion, usuario, peticionUbicacion.rows[0].direccion, peticionUbicacion.rows[0].pais, insercionVacante.rows[0].idvacante])

    // res.json(insercionVacante2.rows) // just dev
}


export const consultarVacantes = async (req, res) => {
    const peticionVacantes = await pool.query('SELECT * FROM Vacante')
    const usuario = req.session.user

    res.json(peticionVacantes.rows)
}


export const obtenerUsuario = (req, res) => {
    const usuario = req.session.user
    const tipo = req.session.tipo
    const data = {
        usuario,
        tipo
    }
    res.json(data)
}


export const consultarDesempleados = async (req, res) => {
    const peticionDesempleados = await pool.query('SELECT * FROM Desempleado')
    res.json(peticionDesempleados.rows)
}

export const consultarEmpresas = async (req, res) => {
    const peticionEmpresas = await pool.query('SELECT * FROM Empresa')
    res.json(peticionEmpresas.rows)
}


export const redireccionHome = (req, res) => {
    const tipo = req.session.tipo

    if (tipo === 'desempleado') {
        res.redirect('/homeDesempleado')
    } else if (tipo === 'empresa') {
        res.redirect('/homeEmpresa')
    } else if (tipo === 'agencia') {
        res.redirect('/homeAgencia')
    } else {
        res.redirect('/')
    }
}


export const vinculacion = async (req, res) => {

    const { candidato, cargo } = req.body

    const [nombre, profesion] = candidato.split(' ')
    const [vacante, empresa] = cargo.split(' ')

    const fechaActual = new Date();
    const opciones = { day: 'numeric', month: 'numeric', year: 'numeric' };
    const fechaCompleta = fechaActual.toLocaleDateString(undefined, opciones);

    const insercionVacante = await pool.query('INSERT INTO Solicitud (fechaRealizacion, cargo, nombreEmpresa, nombreDesempleado) VALUES ($1, $2, $3, $4) RETURNING *', [fechaCompleta, vacante, empresa, nombre])

    res.redirect('/procesos')

}


export const consultarProcesos = async (req, res) => {
    const peticionProcesos = await pool.query('SELECT * FROM Solicitud')
    res.json(peticionProcesos.rows)
}