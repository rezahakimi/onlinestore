import { PrismaClient  } from '../../generated/prisma/client';
import type * as PrismaType from '../../generated/prisma/client';

export const prisma = new PrismaClient();
export type { PrismaType };
