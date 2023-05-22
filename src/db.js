import x from 'pg'
const { Pool } = x // un poco xd pero no deja extraer directamente el Pool del import pg

export const pool = new Pool({
    host: '34.148.210.176',
    port: '5432',
    user: 'postgres',
    password: '12345',
    database: 'taller2'
})
