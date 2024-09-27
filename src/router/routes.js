import Home from '@/pages/Home.vue';
import SignUp from '@/pages/SignUp.vue';
import Login from '@/pages/Login.vue';
import CreateTicket from '@/pages/CreateTicket.vue';
import Email from '@/pages/Email.vue';
import ForgotPassword from '@/pages/ForgotPassword.vue';
import Landing from '@/pages/Landing.vue';

/* the ../ means that we want to access the previous page the ./ means that we want to access the current page*/
const routes =[
    {
        name: 'Landing',
        component :Landing,
        path:'/'
    },
    {
        name: 'Home',
        component :Home,
        path:'/home'
    },
    {
        name: 'SignUp',
        component :SignUp,
        path:'/signup'
    },
    {
        name: 'Login',
        component :Login,
        path:'/login'
    },

    {
        name: 'createTicket',
        component :CreateTicket,
        path:'/createTicket'
    },

    {
        name: 'Email',
        component : Email,
        path:'/email'
    },
    {
        name: 'forgotPassword',
        component :ForgotPassword,
        path:'/forgotPassword'
    },
]

export default routes;