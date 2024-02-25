// route.js

import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
    try {
        const { rows } = await sql`
        SELECT id, title, date_available, pets_allowed, description, features,
        bedrooms, images, details, apt_location, slug, price, unit
        FROM listings
        WHERE apt_location = 'Trails Apartments'
        ORDER BY bedrooms ASC`;

        if (rows.length === 0) {
            return NextResponse.json({ error: 'Listings not found' }, { status: 401 });
        }
            const response = NextResponse.json({
            success: true,
            listings: rows.map(row => ({
                title: row.title,
                date_available: row.date_available,
                images: row.images,
                pets: row.pets_allowed,
                about: row.description,
                features: row.features,
                rooms: row.bedrooms,
                details: row.details,
                loc: row.apt_location,
                slug: row.slug,
                price: row.price,
                unit: row.unit
            }))
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
