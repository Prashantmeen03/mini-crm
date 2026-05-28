const { Pool } = require('pg');

const isProduction = process.env.NODE_ENV === 'production';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL || 'postgresql://postgres:12345678@localhost:5432/mini crm',
    ssl: isProduction ? { rejectUnauthorized: false } : false
});

// Automatically create leads table if it doesn't exist
const initDb = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS leads (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                phone VARCHAR(255) NOT NULL,
                source VARCHAR(255),
                status VARCHAR(255) DEFAULT 'Interested'
            );
        `);
        console.log("Database table 'leads' initialized successfully.");
    } catch (err) {
        console.error("Error initializing database:", err.message);
    }
};

initDb();

module.exports = pool;