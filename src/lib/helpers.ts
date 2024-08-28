import {z} from "zod";

export const signInSchema = z.object({
    email: z.string().min(1, "Please enter your username").regex(/^[a-zA-Z\s]+$/, "Full Name cannot contain special characters or numbers. ").max(150),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters long")
        .regex(
            /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
            "Password must contain at least one uppercase letter, one lowercase letter, and one number"
        ),
});

export const formatDOB = (dob: any) => {
    const day = dob?.day;
    const month = dob?.month;
    const year = dob?.year

    return `${day}/${month}/${year}`;
}

// utils/date.js
export const formattedDate = () => {
    const date = new Date();

    const options: any = { weekday: "long", month: "short", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
};
