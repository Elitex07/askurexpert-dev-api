import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const post = await prisma.customer.findUnique({
    where: { clerkId: params.id },
  });
  return NextResponse.json(post);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { name, email } = await req.json();
  const customer = await prisma.customer.update({
    where: { clerkId: params.id },
    data: { name, email },
  });
  return NextResponse.json(customer);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  await prisma.customer.delete({
    where: { clerkId: params.id },
  });
  return NextResponse.json({ message: "Post deleted" });
}