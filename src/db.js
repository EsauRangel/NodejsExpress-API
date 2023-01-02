import {createPool} from 'mysql2/promise'
import { DB_HOST, DB_PORT, DB_USER, PASSWORD, NAME_DATABASE } from './config.js'
export const pool = createPool({
    host: DB_HOST,
    user: DB_USER,
    password: PASSWORD,
    port: DB_PORT,
    database: NAME_DATABASE
})

