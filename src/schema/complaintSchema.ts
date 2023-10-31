import * as z from 'zod';

export const complaintSchema = z.object({
  email: z.string(),
  name: z.string(),
  observation: z.string(),
});
