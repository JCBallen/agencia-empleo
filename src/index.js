// recuenda activar el nodemon para no tener que estar reiniciando el servidor cada vez que se haga un cambio (npm run dev)
import express from 'express' // esta wea hace todo el web server
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { pool } from './db.js'

const app = express()

// Seteando EJS como motor de vistas
const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs') // para que el servidor sepa que vamos a usar ejs como motor de vistas



app.get('/', async (req, res) => {
    try {
        const query = await pool.query("select * from employee where midinit='I'")
        console.log(query.rows)
        const data = JSON.stringify(query.rows)
        res.render('index', { title: 'Yo y los homies', data: data })
    } catch (e) {
        console.log(e)
    }
})

app.listen(process.env.PORT || 3000)

