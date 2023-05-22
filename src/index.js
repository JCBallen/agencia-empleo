// recuenda activar el nodemon para no tener que estar reiniciando el servidor cada vez que se haga un cambio (npm run dev)
import express from 'express' // framework web server
import morgan from 'morgan' // ver las peticiones que se hacen al servidor
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import rutas from './routes/route.js'

const app = express()
app.use(morgan('dev'))
app.use(express.json()) // para que el servidor pueda entender los datos json
app.use(express.urlencoded({ extended: false })) // para que el servidor pueda entender los datos que se envian desde un formulario
// Seteando EJS como motor de vistas
const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs') // para que el servidor sepa que vamos a usar ejs como motor de vistas

// Middleware
app.use(express.json())
app.use(rutas)
app.use(express.static(join(__dirname, 'public'))) // para que el servidor sepa que la carpeta public es de archivos estaticos (css, js, imagenes, etc

app.listen(process.env.PORT || 3000)

