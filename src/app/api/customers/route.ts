import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    const posts = await prisma.customer.findMany();
    return NextResponse.json(posts);
}

interface CustomerRequestBody {
    name: string;
    email: string;
    clerkId: string;
}

export async function POST(req: Request) {
    const data = await req.json();
    console.log(data);
    const { name, email, clerkId }: CustomerRequestBody = data;
    const post = await prisma.customer.create({
        data: { name, email, clerkId},
    });
    return NextResponse.json(post);
}