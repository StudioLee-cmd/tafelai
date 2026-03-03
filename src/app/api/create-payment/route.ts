import { NextResponse } from 'next/server';
import { createMollieClient } from '@mollie/api-client';
import { siteDetails } from '@/data/siteDetails';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
    try {
        const { packageId, price, description } = await request.json();

        if (!process.env.MOLLIE_API_KEY) {
            console.error('Mollie API key missing');
            return NextResponse.json({ error: 'Mollie API key not configured' }, { status: 500 });
        }

        // Initialize Mollie client lazily to avoid build-time errors
        const mollieClient = createMollieClient({
            apiKey: process.env.MOLLIE_API_KEY,
        });

        const baseUrl = siteDetails.siteUrl.replace(/\/$/, ''); // remove trailing slash

        // Format price to string '0.00' as expected by Mollie
        const formattedPrice = Number(price).toFixed(2);

        const payment = await mollieClient.payments.create({
            amount: {
                currency: 'EUR',
                value: formattedPrice,
            },
            description: description || `Betaling voor pakket ${packageId}`,
            redirectUrl: `${baseUrl}/aanmelding-gelukt?package=${packageId}`,
            cancelUrl: `${baseUrl}/review-pakket?status=cancelled`,
            metadata: {
                packageId,
            },
        });

        return NextResponse.json({ checkoutUrl: payment.getCheckoutUrl() });
    } catch (error: unknown) {
        console.error('Mollie payment error:', error);
        const message = error instanceof Error ? error.message : 'Payment creation failed';
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
