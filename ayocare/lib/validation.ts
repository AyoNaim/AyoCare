import { z } from 'zod'

const formSchema = z.object({
    username: z.string()
        .min(2, "username must be at least 2 characters")
        .max(9, "username has to be 9 characters at maximum"),
    // email: z.string.email("invalid email address")
})