import { z } from 'zod';

const createSchema = z.object({
  seller: z.string(),
  product: z.string(),
  sellerName: z.string(),
  productName: z.string(),
  quantity: z.number(),
  unitPrice: z.number(),
  totalPrice: z.number(),
  paid: z.number().optional()
});
const updateSchema = z.object({
  seller: z.string().optional(),
  product: z.string().optional(),
  sellerName: z.string().optional(),
  productName: z.string().optional(),
  quantity: z.coerce.number().optional(),
  unitPrice: z.coerce.number().optional(),
  totalPrice: z.coerce.number().optional(),
  paid: z.coerce.number().optional()
});

const purchaseValidator = { createSchema, updateSchema };
export default purchaseValidator;
