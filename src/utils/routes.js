import React from "react"
import RegisterPage from "../pages/public/register/register";
import LoginPage from "../pages/public/login/login";
import Dashboard from "../pages/private/dashboard/dashboard";


export const routes = [
    {
        path: '/login',
        component: LoginPage,
        exact: true,
        private: false,
        redirectOnAuth: true,
        title: 'Login',
    },
    {
        path: '/register',
        component: RegisterPage,
        exact: true,
        private: false,
        redirectOnAuth: true,
        title: 'Register'
    },
    {
        path: '/',
        component: Dashboard,
        exact: true,
        private: true,
        title: 'Dashboard'
    },

]
