import * as z from 'zod';

export type TSchemaComplaintSchema = z.infer<typeof complaintSchema>;

export const complaintSchema = z.object({
  email: z.string({ required_error: 'Campo abrigatório' }),
  name: z.string({ required_error: 'Campo abrigatório' }),
  observation: z.string({ required_error: 'Campo abrigatório' }),
});
