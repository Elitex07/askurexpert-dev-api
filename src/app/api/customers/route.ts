import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function GET() {
    const posts = await prisma.customer.findMany();
    return NextResponse.json(posts);
}

export async function POST(req: Request) {
    const data = await req.json();
    console.log(data);
    const { name, email, clerkId, panNumber, status } = data;
    const post = await prisma.customer.create({
        data: { name, email, clerkId, panNumber, status},
    });
    return NextResponse.json(post);
}