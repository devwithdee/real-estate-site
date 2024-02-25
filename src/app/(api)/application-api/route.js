import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import { useAccount } from '../../../../context/account';
import { useApplication } from '../../../../context/appstatus';

export async function POST(request) {
    
try {
    const { dateapplied, score, moveindate, comments } = request.json();
    const { userId } = useAccount();
    const { unit } = useApplication();
    if (!userId || !unit || !dateapplied || !score || !moveindate || !comments) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const result = await sql`
      INSERT INTO users (user_id, listing_id, date_applied, status,
        income_verification, credit_score, move_in_date, comments)
      VALUES (${userId}, ${unit}, ${dateapplied}, ${app_status}, 
         ${income_verification}, ${score}, ${moveindate}, ${comments})
      RETURNING *;
    `;
    const response = NextResponse.json({ 
      success: true,
    }, { status: 200 });
    response.headers.set("Content-Security-Policy", "default-src 'self'");
    response.headers.set("X-Content-Type-Options", "nosniff");
    response.headers.set("X-Frame-Options", "DENY");
    response.headers.set("X-XSS-Protection", "1; mode=block");
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    console.log("wtf");
    return NextResponse.json({ error }, { status: 500 });
    
  }
}
