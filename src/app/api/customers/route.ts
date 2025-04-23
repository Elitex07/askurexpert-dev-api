import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
    const posts = await prisma.customer.findMany();
    return NextResponse.json(posts);
}

export async function POST(req: Request) {
    const data = await req.json();
    const { name, email, clerkId, panNumber, status } = data;
    const post = await prisma.customer.create({
        data: { name, email, clerkId, panNumber, status},
    });

    const allowedOrigins = ['http://localhost:3000', 'https://main-website-three-tau.vercel.app'];
    const origin = req.headers.get('origin') || '';
    
    return NextResponse.json(post, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': allowedOrigins.includes(origin) ? origin : '',
            'Access-Control-Allow-Methods': 'POST',
            'Access-Control-Allow-Headers': 'Content-Type',
        }
    });
}