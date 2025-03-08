import { isPossiblePhoneNumber, isValidPhoneNumber } from 'react-phone-number-input';
import { z } from 'zod';

export const zodSchema = z.object({
    patientName: z.string().min(3, { message: 'Name must be at least 3 characters long' })
    .max(20, { message: "Name does not exist of 20 character long" }),
    
    email: z.string().email({ message: 'Invalid email address' }),
    phone_number: z.string().refine((phone) => isValidPhoneNumber(phone) && isPossiblePhoneNumber(phone), {
        message: "Please enter a valid phone number.",
    }),

    blood_group: z.string().nonempty({ message: 'Blood Group cannot be empty' }),
    allergies: z.string().min(3, { message: 'Allergies must be at least 3 characters long' })
    .max(20, { message: "Allergies does not exist of 20 character long" })
    .nonempty({ message: 'Allergies cannot be empty' }),
    problems: z.string().nonempty({ message: 'problems cannot be empty' }),


    plan: z.string().optional(),
    paymentMethod: z.string().optional(),
});

export type FormValue = z.infer<typeof zodSchema>;