"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function incrementCounter() {
    let counter = await prisma.counter.findFirst();

    if (!counter) {
        counter = await prisma.counter.create({
            data: { count: 1 },
        });
    } else {
        counter = await prisma.counter.update({
            where: { id: counter.id },
            data: { count: counter.count + 1 },
        });
    }

    return counter.count;
}
