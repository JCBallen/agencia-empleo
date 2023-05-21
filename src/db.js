import x from 'pg'
const { Pool } = x

export const pool = new Pool({
    user: 'postgres',
    password: '12345',
    host: '34.148.210.176',
    port: '5432',
    database: 'taller2'
})
