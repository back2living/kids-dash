export type UserType = {
    avatar: string;
    createdAt: Date;
    device: string;
    email: string;
    fcmTokens: [];
    firstName: string;
    lastName: string;
    guardian: string;
    hasSeenOnboarding: boolean;
    isSubscribed: boolean;
    isVerified: boolean;
    passwordChangeAt: Date;
    points: number;
    role: string;
    suspended: boolean;
    updatedAt: Date;
    username: string;
    _id: string;
    gender: string;
    dob: {
        day: number;
        month: number;
        year: number;
    }
} | null;