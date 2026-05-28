const { Pool } = require('pg');

const isProduction = process.env.NODE_ENV === 'production';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgresql://postgres:12345678@localhost:5432/mini crm',
    ssl: isProduction ? { rejectUnauthorized: false } : false
});

module.exports = pool;