import { sql } from '@vercel/postgres';
import { compare } from 'bcrypt';

export default async function login(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Missing email or password in the request body' });
    }

    const { rows } = await sql`
      SELECT email, password
      FROM users
      WHERE email = ${email}
    `;
    
    if (rows.length === 0) {
      return res.status(401).json({ error: 'User not found' });
    }
    
    const dbPassword = rows[0].password;
    const passwordMatch = await compare(password, dbPassword);
    
    if (!passwordMatch) {
      console.error('Invalid password');
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Respond with the user
    res.status(200).json({ success: true, user: rows[0] });
    console.log('User:', rows[0]);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
}
