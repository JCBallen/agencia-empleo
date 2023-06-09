import { Router } from "express";
import {
    toIndex,
    toRegistro,
    toHomeAgencia,
    toHomeDesempleado,
    toHomeEmpresa,
    toEmpresa,
    toProcesos,
    toAgregarVacante,
    registrarDB,
    iniciarSesion,
    cerrarSesion,
    agregarVacante,
    consultarVacantes,
    obtenerUsuario,
    consultarDesempleados,
    consultarEmpresas,
    redireccionHome,
    vinculacion,
    consultarProcesos
} from "../controllers/controller.js";


const router = Router();


router.get('/', toIndex)

router.get('/index', toIndex)

router.get('/registro', toRegistro)

router.get('/homeAgencia', toHomeAgencia)

router.get('/homeDesempleado', toHomeDesempleado)

router.get('/homeEmpresa', toHomeEmpresa)

router.get('/empresa', toEmpresa)

router.get('/procesos', toProcesos)

router.get('/agregarVacante', toAgregarVacante)

// ! Procesos con la base de datos

router.post('/registro', registrarDB)

router.post('/login', iniciarSesion) // no existe realmente login en las vistas, este es el primero full api

router.get('/logout', cerrarSesion)

router.post('/agregarVacante', agregarVacante)

router.get('/consultarVacantes', consultarVacantes)

router.get('/obtenerUsuario', obtenerUsuario)

router.get('/consultarDesempleados', consultarDesempleados)

router.get('/consultarEmpresas', consultarEmpresas)

router.get('/redireccionHome', redireccionHome)

router.post('/vinculacion', vinculacion)

router.get('/consultarProcesos', consultarProcesos)

export default router