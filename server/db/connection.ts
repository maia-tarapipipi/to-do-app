import knexfile from "./knexfile";
import knex from 'knex'
type Environment = 'development'
const environment = (process.env.NODE_ENV || 'development') as Environment
const config = knexfile[environment]
const connection = knex(config)

export default connection