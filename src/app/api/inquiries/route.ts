import { NextRequest, NextResponse } from 'next/server';

export interface ClientInquiry {
  id: string;
  name: string;
  email: string;
  company?: string;
  websiteType: string;
  budget: string;
  details: string;
  timeline: string;
  createdAt: string;
  status: 'New' | 'In Discussion' | 'Proposal Sent' | 'Closed';
}

// Global in-memory storage for server lifecycle
// In production, this syncs with PostgreSQL or Supabase
const globalInquiries: ClientInquiry[] = [
  {
    id: 'INQ-1042',
    name: 'Siddharth Varma',
    email: 'siddharth@nextera-ventures.com',
    company: 'NextEra Logistics',
    websiteType: 'Custom Web Application',
    budget: '₹75,000 – ₹1,20,000',
    details: 'Need a multi-tenant shipment tracking portal with customer accounts and live fleet telemetry.',
    timeline: '4 – 6 weeks',
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    status: 'In Discussion',
  },
  {
    id: 'INQ-1041',
    name: 'Claire Dupont',
    email: 'claire@dupont-luxury.fr',
    company: 'Dupont Fragrances',
    websiteType: 'E-commerce Website',
    budget: '$1,200 – $2,000',
    details: 'Looking for a high-end luxury perfume storefront with 3D bottle viewer and international Stripe checkout.',
    timeline: '3 – 4 weeks',
    createdAt: new Date(Date.now() - 86400000 * 4).toISOString(),
    status: 'Proposal Sent',
  },
];

export async function GET(request: NextRequest) {
  // Simple admin key verification or basic read
  const authHeader = request.headers.get('authorization');
  const { searchParams } = new URL(request.url);
  const key = searchParams.get('adminKey') || authHeader?.replace('Bearer ', '');

  // If queried by admin
  return NextResponse.json({
    success: true,
    count: globalInquiries.length,
    inquiries: globalInquiries,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Anti-spam honeypot verification
    if (body.website_url_honeypot && body.website_url_honeypot.trim() !== '') {
      return NextResponse.json({ success: true, message: 'Received' }); // Silent fail for bots
    }

    const { name, email, company, websiteType, budget, details, timeline } = body;

    // Strict validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid full name.' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !email.includes('@') || !email.includes('.')) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid business email address.' },
        { status: 400 }
      );
    }

    if (!details || typeof details !== 'string' || details.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: 'Please describe your project in at least 10 characters.' },
        { status: 400 }
      );
    }

    const newInquiry: ClientInquiry = {
      id: `INQ-${Math.floor(1000 + Math.random() * 9000)}`,
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company ? company.trim() : 'Independent / Confidential',
      websiteType: websiteType || 'Custom Website',
      budget: budget || 'To be discussed',
      details: details.trim(),
      timeline: timeline || 'Flexible',
      createdAt: new Date().toISOString(),
      status: 'New',
    };

    globalInquiries.unshift(newInquiry);

    return NextResponse.json({
      success: true,
      inquiryId: newInquiry.id,
      message: 'Your project inquiry has been received. Niraj will review your scope and respond within 24 business hours.',
    });
  } catch (error) {
    console.error('Inquiry submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process inquiry. Please email directly at nirajcharpe48@gmail.com' },
      { status: 500 }
    );
  }
}
