import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { compare } from 'bcrypt';

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Missing email or password in the request body' }, { status: 400 });
    }

    const { rows } = await sql`
    SELECT password, first_name, last_name
    FROM users
    WHERE email = ${email}
    `;

    if (rows.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 401 });
    }

    const {
      password: dbPassword,
      first_name: first_name,
      last_name: last_name
    } = rows[0];
    const passwordMatch = await compare(password, dbPassword);

    if (!passwordMatch) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }
    const response = NextResponse.json({ 
      success: true,
      user: {
        firstName: first_name,
        lastName: last_name,
        email: email
      }
     }, { status: 200 });
    response.headers.set("Content-Security-Policy", "default-src 'self'");
    response.headers.set("X-Content-Type-Options", "nosniff");
    response.headers.set("X-Frame-Options", "DENY");
    response.headers.set("X-XSS-Protection", "1; mode=block");
    return response;
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error }, { status: 500 });
  }
}
