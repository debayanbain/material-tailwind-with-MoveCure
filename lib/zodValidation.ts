import { z } from 'zod';

export const zodSchema = z.object({
    name: z.string().min(3, { message: 'Name must be at least 3 characters long' })
    .max(20, { message: "Name does not exist of 20 character long" }),
    
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),

    blood_group: z.string().nonempty({ message: 'Blood Group cannot be empty' }),
    allergies: z.string().min(3, { message: 'Allergies must be at least 3 characters long' })
    .max(20, { message: "Allergies does not exist of 20 character long" })
    .nonempty({ message: 'Allergies cannot be empty' }),

    problems: z.string().optional(),

    plan: z.string().optional(),
    paymentMethod: z.string().optional(),
});

export type FormValue = z.infer<typeof zodSchema>;