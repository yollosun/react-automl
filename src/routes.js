import SignIn from "./components/Auth/SignIn"
import SignUp from "./components/Auth/SignUp"
import Charts from "./components/Charts"
import Profile from "./components/Profile"

import Welcome from "./components/Welcome"
import { SIGNIN_ROUTE, SIGNUP_ROUTE, WELCOME_ROUTE, PROFILE_ROUTE, CHARTS_ROUTE } from './utils/utils'

export const publicRoutes = [
    {
        path: SIGNIN_ROUTE,
        Component: SignIn
    },
    {
        path: WELCOME_ROUTE,
        Component: Welcome
    },
    {
        path: SIGNIN_ROUTE,
        Component: SignIn
    },
    {
        path: SIGNUP_ROUTE,
        Component: SignUp
    },

]

export const privateRoutes = [

    {
        path: PROFILE_ROUTE,
        Component: Profile
    },
    {
        path: CHARTS_ROUTE,
        Component: Charts
    },
    {
        path: WELCOME_ROUTE,
        Component: Welcome
    }
]