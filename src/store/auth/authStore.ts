import {create, StateCreator} from "zustand";
import { persist, PersistOptions } from "zustand/middleware";
import {UserType} from "@/interfaces/UserInterface";

interface AuthState {
    currentUser: null | UserType;
    setCurrentUser: (user: UserType) => void;
}

type AuthPersist = (
    config: StateCreator<AuthState>,
    options: PersistOptions<AuthState>
) => StateCreator<AuthState>;

const useAuthStore = create<AuthState>(
    (persist as AuthPersist)(
        (set) => ({
            currentUser: null,
            setCurrentUser: (user) => set(() => ({ currentUser: user })),
        }),
        { name: "pgKidAuth" }
    )
);

export const useCurrentUser = () => useAuthStore((state) => state.currentUser) as UserType;
export const useSetCurrentUser = () => useAuthStore((state) => state.setCurrentUser);
