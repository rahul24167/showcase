// packages/db/index.ts
import { PrismaClient } from '@repo/db/generated'; // or correct path

export const prisma = new PrismaClient();
