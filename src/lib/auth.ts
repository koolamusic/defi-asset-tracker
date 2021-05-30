import { useRouter } from 'next/router'
import { useMoralis } from "./moralis";

export function useAuth() {
    const { Moralis } = useMoralis();
    const router = useRouter();

    return {
        login: async () => {
            try {
                const user = await Moralis?.Web3.authenticate();

                /* Temp persist user in local storage */
                window.localStorage.setItem("user", JSON.stringify(user))
                /* Temp persist user in local storage */

                router.push('/')
            } catch (e) {
                console.error(e.message, e);
            }
        },

        logout: async () => {
            try {
                await Moralis?.User.logOut();
                router.push("/login");
            } catch (e) {
                console.error(e.message, e);
            }
        },

        currentUser: () => {
            return Moralis?.User.current();
        },
    };
}