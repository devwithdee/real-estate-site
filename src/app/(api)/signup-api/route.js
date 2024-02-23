import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';

export async function POST(request) {
  try {
    const { first_name, last_name, email, password } = await request.json();
    if (!first_name || !last_name || !email || !password) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const hashedPassword = await hash(password, 10);

    const result = await sql`
      INSERT INTO users (first_name, last_name, email, password)
      VALUES (${first_name}, ${last_name}, ${email}, ${hashedPassword})
      RETURNING *;
    `;
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
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
