/**
 * Authentication handler actions for the client application
 * Methods will include
 * @method logout - clear cookies after call to api
 * @method loginUser - persist cookies to browser
 * @method getToken - get Token from user session
 * @method isAuthenticated - Check that user is authenticated
 */

import { NextPageContext } from "next";
import Router from 'next/router';
import { setCookie, destroyCookie, parseCookies } from 'nookies'

export const settings = {
    loginRoute: '/login',
    authKey: "__app.sid",
    profileKey: "__app.user"
}

export const redirect = (target: string, ctx: NextPageContext) => {
    if (ctx.res) {
        ctx.res.writeHead(303, { Location: target });
        ctx.res.end();
    } else {
        // window.location.replace(target) window.location has some bugs
        Router.replace(target);
    }
}

export const loginUser = async (target: string, payload: string) => {
    // Sign in a user by setting the cookie with the token received from Login Auth Request
    setCookie(null, settings.profileKey, payload);
    window.location.replace(target);
};

export const logoutUser = (ctx: NextPageContext | null, target = settings.loginRoute) => {

    // Sign out user by removing the cookie from the broswer session
    destroyCookie(ctx, settings.authKey);
    destroyCookie(ctx, settings.profileKey);
    redirect(target, ctx as NextPageContext);

};

export const getToken = (ctx: NextPageContext) => {
    // Fetch the auth token for a user
    const cookies = parseCookies(ctx);
    return cookies[settings.authKey]
};


export const isAuthenticated = (ctx: NextPageContext) => !!getToken(ctx);

export const redirectIfAuthenticated = (ctx: NextPageContext, target = '/') => {
    if (isAuthenticated(ctx)) {
        redirect(target, ctx);
        return true;
    }
    return false;
};