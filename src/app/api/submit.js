import { createClient } from '@vercel/postgres';

export default async function handler(req, res) {
  try {
    // Extract user data from the request body
    const { first_name, last_name, email, password } = req.body;

    // Validate input (add your own validation logic)

    // Log the received data
    console.log('Received data:', { first_name, last_name, email, password });

    // Create a PostgreSQL client
    const client = createClient({
      connectionString: process.env.POSTGRES_URL,
      ssl: {
        rejectUnauthorized: false, // Set to true in production with a valid SSL certificate
      },
    });

    // Connect to the database
    await client.connect();

    // Insert the new user into the database
    const result = await client.query(
      'INSERT INTO users(first_name, last_name, email, password) VALUES($1, $2, $3, $4) RETURNING *',
      [first_name, last_name, email, password]
    );

    // Respond with the created user
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    // Close the database connection
    await client.end();
  }
}
