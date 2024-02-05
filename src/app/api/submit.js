import { createPool } from '@vercel/postgres';

export default async function handler(req, res) {
  let pool; // Declare the pool variable outside the try block

  try {
    // Extract user data from the request body
    const { first_name, last_name, email, password } = req.body;

    // Validate input (add your own validation logic)

    // Log the received data
    console.log('Received data:', { first_name, last_name, email, password });

    // Check for null values in required fields
    if (!first_name || !last_name || !email || !password) {
      throw new Error('Missing required fields');
    }

    // Create a PostgreSQL pool
    pool = createPool({
      connectionString: process.env.POSTGRES_URL,
      ssl: {
        rejectUnauthorized: false, // Set to true in production with a valid SSL certificate
      },
    });

    // Connect to the database from the pool
    const client = await pool.connect();

    // Insert the new user into the database
    const result = await client.query(
      'INSERT INTO users(first_name, last_name, email, password) VALUES($1, $2, $3, $4) RETURNING *',
      [first_name, last_name, email, password]
    );

    // Release the client back to the pool
    client.release();

    // Respond with the created user
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Top-level error:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  } finally {
    // Close the pool if it was established
    if (pool) {
      await pool.end();
    }
  }
}
