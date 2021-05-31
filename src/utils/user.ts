import { UserAccountDict } from './../lib/constants'
/**
 * Handle User interaction with Next App
 * @method logout - clear cookies after call to api
 * @method loginUser - persist cookies to browser
 * @method getProfile - Profile from user session
 * @method isAuthenticated - Check that user is authenticated
 */

import { NextPageContext } from 'next'
import Router from 'next/router'
import { encode, decode } from 'js-base64'
import { setCookie, destroyCookie, parseCookies } from 'nookies'

export const settings = {
    loginRoute: '/login',
    rootRoute: '/tokens',
    authKey: '__app.sid',
    profileKey: '__app.user',
}

export const redirect = (
    ctx: NextPageContext,
    target = settings.loginRoute
) => {
    if (ctx.res) {
        ctx.res.writeHead(303, { Location: target })
        ctx.res.end()
    } else {
        // window.location.replace(target) window.location has some bugs
        Router.replace(target)
    }
}

export const loginUser = async (
    payload: UserAccountDict,
    target = settings.rootRoute
) => {
    // Sign in a user by setting the cookie with the token received from Login Auth Request
    const userCookie = encode(JSON.stringify(payload))
    setCookie(null, settings.profileKey, userCookie, {
        sameSite: 'lax',
        maxAge: 30 * 24 * 60 * 60,
        /* @todo Set this back to secure and pass user profile from GetServerSideProps */
        // secure: true,
        // signed: true
    })
    window.location.replace(target)
}

export const logoutUser = (
    ctx: NextPageContext | null,
    target = settings.loginRoute
) => {
    // Sign out user by removing the cookie from the broswer session
    destroyCookie(ctx, settings.authKey)
    destroyCookie(ctx, settings.profileKey)
    redirect(ctx as NextPageContext, target)
}

export const getProfile = async (ctx: NextPageContext) => {

    try {

        // Fetch the auth token for a user
        const cookies = await parseCookies(ctx)
        const userCookie = cookies[settings.profileKey]
        // console.log(userCookie, "the users scoook --------")

        /* Handle error with user cookie not defined */
        if (!userCookie) return null

        const userProfile = JSON.parse(decode(userCookie))
        // console.log(userProfile, "The user cookie")
        return userProfile as UserAccountDict
    } catch (error) {
        console.log(error)
        return null
    }
}

export const isAuthenticated = async (ctx: NextPageContext) => {
    try {
        // Fetch the auth token for a user
        const cookies = await parseCookies(ctx)
        const userCookie = cookies[settings.profileKey]
        if (userCookie == undefined) return false

        /* Return truthy */
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}

export const handleAuthenticatedRequest = async (ctx: NextPageContext, target = settings.loginRoute) => {
    /* If user is authenticated, get profile from cookies and pass into props */

    const userHasCookie = await isAuthenticated(ctx)
    if (userHasCookie) {
        const userProfile = await getProfile(ctx)
        console.log("I got here init", userProfile)
        return {
            props: {
                user: userProfile
            }
        }
    }
    redirect(ctx, target)
}
