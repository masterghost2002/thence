import * as z from 'zod';
export const RegistrationFormSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Name must not be empty' })
    .max(50, { message: 'Name must not exceed 50 characters' })
    .regex(/^[a-zA-Z]+$/, { message: 'Name must contain only alphabets' }),
  email: z.string().email({ message: 'Enter a valid email address' })
});
export type RegistrationFormType = z.infer<typeof RegistrationFormSchema>;
