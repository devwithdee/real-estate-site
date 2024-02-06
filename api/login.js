import { db } from '@vercel/postgres';
import { hash, compare } from 'bcrypt';

export default async function login(req, res) {
  try {
    const { email, password } = req.body;
    console.log('User Input Password:', password);

    let client;

    try {
      client = await db.connect();

      const hashedPassword = await hash(password, 10);

      const result = await client.query(
        'SELECT email, password FROM users WHERE email = $1',
        [email]
      );

      if (result.rows.length === 0) {
        return res.status(401).json({ error: 'User not found' });
      }

      const dbPassword = result.rows[0].password;
      const passwordMatch = await compare(password, dbPassword);
      console.log('Database Password:', dbPassword);

      if (!passwordMatch) {
        console.error('Invalid password');
        return res.status(401).json({ error: 'Invalid password' });
      }

      // Respond with the user
      res.status(200).json({ success: true, user: result.rows[0] });
      console.log('User:', result.rows[0]);
    } finally {
      // Release the client back to the pool if it was established
      if (client) {
        client.release();
      }
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
