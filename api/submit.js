import { db } from '@vercel/postgres';
import { hash } from 'bcrypt';

export default async function handler(req, res) {
  let client; // Declare the client variable using let

  try {
    const { first_name, last_name, email, password } = req.body;

    if (!first_name || !last_name || !email || !password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const hashedPassword = await hash(password, 10);

    // Log the received data
    console.log('Received data:', { first_name, last_name, email });

    // Create a PostgreSQL client using db.connect
    client = await db.connect();

    // Insert the new user into the database
    const result = await client.query(
      'INSERT INTO users(first_name, last_name, email, password) VALUES($1, $2, $3, $4) RETURNING *',
      [first_name, last_name, email, hashedPassword]
    );

    // Respond with the created user
    res.status(201).json(result.rows[0]);
    console.log('Inserted user:', result.rows[0]);
  } catch (error) {
    console.error('Error in API route:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  } finally {
    // Release the client back to the pool if it was established
    if (client) {
      client.release();
    }
  }
}
