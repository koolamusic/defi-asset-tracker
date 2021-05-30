import { useRouter } from 'next/router'
import { useMoralis } from "./moralis";
import { generateRandomName } from '@utils/helpers'


export function useAuth() {
    const { Moralis } = useMoralis();
    const router = useRouter();

    return {
        login: async () => {
            try {

                const user = await Moralis?.Web3.authenticate();
                console.log(user.authenticated())

                /* Assign new properties on signup */
                const hasName = await user.get("name")

                if (!hasName) {
                    user.set("name", generateRandomName())
                    await user.save()
                }

                /* Temp persist user in local storage */
                window.localStorage.setItem("user", JSON.stringify(user))
                /* Temp persist user in local storage */

                router.push('/')
            } catch (e) {
                console.error(e.message, e);
                alert(e.message)
            }
        },

        logout: async () => {
            try {
                await Moralis?.User.logOut();
                /* Temp persist user in local storage */
                window.localStorage.removeItem("user")
                /* Temp persist user in local storage */
                router.push("/login");
            } catch (e) {
                console.error(e.message, e);
                alert(e.message)
            }
        },

        currentUser: () => {
            return Moralis?.User.current();
        },
    };
}