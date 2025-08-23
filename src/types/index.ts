import { Prisma } from '../../generated/prisma/client';

export type ProductsWithImages = Prisma.ProductGetPayload<{
  include: { images: true };
}>;

export type CartWithProduct = Prisma.CartItemGetPayload<{
  include: { product: true; Images: true };
}>;