import { useRouter } from 'next/router'
import { useMoralis } from './moralis'
import { generateRandomName } from '@utils/helpers'
import { loginUser } from '@utils/user'
import { config, UserAccountDict } from './constants'
import { destroyCookie } from 'nookies'

export function useAuth() {
    const { Moralis } = useMoralis()
    const router = useRouter()

    return {
        login: async () => {
            try {
                const user = await Moralis?.Web3.authenticate()

                /* Assign new properties on signup */
                const hasName = await user.get('name')

                if (!hasName) {
                    user.set('name', generateRandomName())
                    await user.save()
                }

                /* Use utility to add user info to cookies */
                const userToObject = JSON.parse(JSON.stringify(user)) as UserAccountDict

                userToObject.ethBalance = await Moralis.Web3.getERC20()
                userToObject.bnbBalance = await Moralis.Web3.getERC20({ chain: 'bsc' })

                /* Use utility to add user info to cookies */
                loginUser(userToObject)

                // /* Upon login build some default profile object and add to context */
                // const profile: UserAccountDict = {
                //     ...user,
                //     ethBalance,
                //     bnbBalance
                // }
                // context.update(profile)

                /* Temp persist user in local storage */
                // window.localStorage.setItem("user", JSON.stringify(user))

                router.push('/tokens')
            } catch (e) {
                console.error(e.message, e)
                alert(e.message)
                await Moralis?.User.logOut()
            }
        },
        /* @todo Add User Context here and manage logout from one place or 
            Make logout page handle logout on both client and server. */

        logout: async () => {
            try {
                await Moralis?.User.logOut()

                /* Exec user logout on cookies too and route to login */
                await destroyCookie(null, config.profileKey)


                /* Temp persist user in local storage */
                // window.localStorage.removeItem("user")

                router.push("/login");
            } catch (e) {
                console.error(e.message, e)
                alert(e.message)
            }
        },

        currentUser: () => {
            return Moralis?.User.current()
        },
    }
}
