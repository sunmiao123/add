
import Home from './views/home'
import Addclass from './views/addclass'
import ClassManagement from './views/ClassManagement'
import AddStudent from './views/addStudent'
import Detail from './views/detail'
import Login from './views/login'


export const routers =[
    {
        path:'/home',
        component:Home
    },
    {
        path:'/addclass',
        component:Addclass
    },
    {
        path:'/ClassManagement',
        component:ClassManagement
    },
    {
        path:'/addStudent',
        component:AddStudent
    },
    {
        path:'/detail/:id',
        component:Detail
    },
    {
        path:'/login',
        component:Login
    },
    {
        path:'/',
        redirect:'/home'
    }
]