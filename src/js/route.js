import Vue from 'vue'
import Router from 'vue-router'
import Edit from '../components/edit'
import Create from '../components/create'
import Index from '../components/list'

Vue.use(Router)

export default new Router({
    routes:[
    {
        path:'/',
        component:Index
    },
    {
        path:'/edit/:id',
        component:Edit
    },
    {
        path:'/create/',
        component:Create
    },
]
})