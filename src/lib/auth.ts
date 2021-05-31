import { useRouter } from 'next/router'
import { useMoralis } from "./moralis";
import { generateRandomName } from '@utils/helpers'
import { loginUser, logoutUser } from '@utils/user'
import { UserAccountDict } from './constants';


export function useAuth() {
    const { Moralis } = useMoralis();
    const router = useRouter();

    return {
        login: async () => {
            try {

                const user = await Moralis?.Web3.authenticate();
                console.log(user.authenticated())

                /* Assign new properties on signup */
                const hasName = await user.get("name") as UserAccountDict

                if (!hasName) {
                    user.set("name", generateRandomName())
                    await user.save()
                }

                /* Use utility to add user info to cookies */
                loginUser(user)
                /* Use utility to add user info to cookies */


                /* Temp persist user in local storage */
                // window.localStorage.setItem("user", JSON.stringify(user))

                router.push('/tokens')
            } catch (e) {
                console.error(e.message, e);
                alert(e.message)
                await Moralis?.User.logOut();
            }
        },
        /* @todo Add User Context here and manage logout from one place or 
        Make logout page handle logout on both client and server. */

        logout: async () => {
            try {
                await Moralis?.User.logOut();

                /* Exec user logout on cookies too and route to login */
                // logoutUser({ user: null })

                /* Temp persist user in local storage */
                // window.localStorage.removeItem("user")

                // router.push("/login");
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