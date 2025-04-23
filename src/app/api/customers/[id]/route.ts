import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function GET(req: Request, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const post = await prisma.customer.findUnique({
    where: { id: params.id },
  });
  return NextResponse.json(post);
}

export async function PUT(req: Request, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const { name, email, panNumber, status, createdAt } = await req.json();
  const customer = await prisma.customer.update({
    where: { id: params.id },
    data: { name, email, panNumber, status, createdAt },
  });
  return NextResponse.json(customer);
}

export async function DELETE(req: Request, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  await prisma.customer.delete({
    where: { id: params.id },
  });
  return NextResponse.json({ message: "Customer deleted" });
}